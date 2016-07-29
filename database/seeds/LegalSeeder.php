<?php

use Illuminate\Database\Seeder;

use App\Instrument;

class LegalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $json = File::get("database/seeds/data/legal_instruments.json");
        $data = json_decode($json);

        foreach($data as $instrument){
          $parent = Instrument::create([
            'acronym' => $instrument->acronym,
            'title' => $instrument->name,
            'slug' => str_slug($instrument->name)
          ]);

          if(count($instrument->entries)){
            foreach($instrument->entries as $child){
              Instrument::create([
                'acronym' => $child->acronym,
                'title' => $child->name,
                'slug' => str_slug($child->name),
                'parent_id' => $parent->id
              ]);
            }
          }
        }

    }
}
