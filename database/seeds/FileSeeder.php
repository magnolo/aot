<?php

use Illuminate\Database\Seeder;
use League\Csv\Reader;
use Illuminate\Console\Command;

use App\Itemfile;

use App\Item;
use App\Theme;
use App\Year;
use App\Author;
use App\Country;
use App\Instrument;
use App\Group;
use App\Source;
use App\Type;
use App\Outputcategory;
use App\Language;
// use Storage;
// use DB;

class FileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //
        $reader = Reader::createFromPath(base_path().'/database/seeds/data/files_import.csv');
        $reader->setDelimiter(";");
        $results = $reader->fetch();
        DB::beginTransaction();
        foreach ($results as $key => $row) {

            $item = new Item;
            $item->document_title = $row[2].strtolower($row[15]);
            $item->screen_title = $row[3];
            $item->short_description = $row[13];
            $item->save();

            $themes = array_map('trim',explode(',', $row[4]));
            $this->command->info("Item: ".$row[2]);
            foreach($themes as $t){
              $this->command->info($key." - Theme: ".$t);
              $theme = Theme::where('title', 'like', "%$t%")->first();


              $item->themes()->attach($theme);
            }

            $category = Outputcategory::where('title', trim($row[1]))->first();
            $this->command->info($key." - Category: ".$category->id. " - ".$category->title);
            $item->category_id = $category->id;

            $source = Source::where('acronym', trim($row[5]))->first();
            if($source){
              $this->command->info($key." - Source: ".$source->id. " - ".$source->acronym);
              $item->source_id = $source->id;
            }
            else{
              $this->command->error($key." - Source: ".$row[5]. " not found ");
            }


            $year = Year::where('year', $row[7])->first();
            if(!$year)
              $year = Year::create(['year' => $row[7]]);
              $this->command->info($key." - Year: ".$year->year);
            $item->years()->attach($year);

            $type = Type::where('title', 'like', '%'.trim($row[8]).'%')->first();
            if($type){
              $this->command->info($key." - Type: ".$type->id. " - ".$type->title);
            $item->type_id = $type->id;
            }
            else{
                $this->command->error($key." - Type: ".$row[8]. " not found ");
            }


            $language = Language::where('title', 'like', '%'.trim($row[9]).'%')->first();
            if($language){
              $this->command->info($key." - Language: ".$language->id. " - ".$language->title);
              $item->language_id = $language->id;
            }
            else{
                $this->command->error($key." - Language: ".$row[9]. " not found ");
            }


            $li =  array_map('trim',explode(',', $row[10]));
            foreach($li as $i){
                $instrument = Instrument::where('acronym', 'like', $i)->orWhere('title', 'like', $i)->first();
                if($instrument){
                  $this->command->info($key." - Instrument: ".$instrument->id. " - ".$instrument->acronym);
                  $item->instruments()->attach($instrument);
                }
                else{
                  $this->command->error($key." - Instrument: ".$i. " not found ");
                }
            }
            $sli = array_map('trim',explode(',', $row[11]));
            foreach($sli as $i){
                $sub_instrument = Instrument::where('acronym', $i)->orWhere('title', $i)->first();
                if($sub_instrument){
                  $this->command->info($key." - Instrument: ".$sub_instrument->id. " - ".$sub_instrument->title);
                  $item->instruments()->attach($sub_instrument);
                }
                else{
                  $this->command->error($key." - Instrument: ".$i. " not found ");
                }

            }

            $gp = array_map('trim',explode(',' , $row[12]));
            foreach($gp as $g){
              if($g){
                $group = Group::where('title', $g )->first();
                if($group){
                  $this->command->info($key." - Group: ".$group->id. " - ".$group->title);
                  $item->groups()->attach($group);
                }
                else{
                  $this->command->error($key." - Group: ".$g. " not found ");
                }
              }

            }
            try
            {
                $file = base_path().'/database/seeds/files/'.$row[0].'.'.strtolower($row[15]);
                $contents = \File::get($file);
                \Storage::disk('local')->put($row[0].'.'.strtolower($row[15]),  $contents);
            		$entry = new Itemfile();
            	   $entry->mime = \File::mimeType($file);
            		$entry->original_filename = $row[0].'.'.strtolower($row[15]);
            		$entry->filename = $row[0].'.'.strtolower($row[15]);
            		$entry->ext = strtolower($row[15]);
                $entry->size = \File::size($file);

            		$entry->save();

                $item->file_id = $entry->id;

                $item->save();
            }
            catch (Illuminate\Filesystem\FileNotFoundException $exception)
            {
                  $this->command->error("The file doesn't exist");
            }


        }
        DB::commit();
    }
}
