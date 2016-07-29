<?php

use Illuminate\Database\Seeder;

use App\Language;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $languages = [
          ['name'=>'English', 'short' => 'en', 'default' => true],
          ['name'=>'French', 'short' => 'fr', 'default' => false],
          ['name'=>'German', 'short' => 'de', 'default' => false],
          ['name'=>'Spanish', 'short' => 'es', 'default' => false],
          ['name'=>'Other', 'short' => '', 'default' => false]];

        foreach($languages as $lang){

          $l = Language::create([
            'title' => $lang['name'],
            'short' => $lang['short'],
            'default' => $lang['default']
          ]);
        }
    }
}
