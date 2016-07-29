<?php

use Illuminate\Database\Seeder;

use App\Type;

class ItemTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $types = ['Annual Report',
          'Concluding Observations',
          'General Comment',
    			'Guidelines/Handbook/Manual',
    			'Inquiry Procedure',
    			'Jurisprudence',
    			'Legal instrument',
    			'News',
    			'Press release',
    			'Recommendations',
    			'Report',
    			'Rules of Procedure',
    			'State Report',
    			'Submissions',
    			'Training material',
    			'Other'];

          foreach($types as $type){
             Type::create(['title' => $type,'slug' => str_slug($type)] );
          }
    }
}
