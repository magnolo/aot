<?php

use Illuminate\Database\Seeder;
use App\Outputcategory;

class OutputcategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $cats = [ 'UN bodies', 'Regional bodies', 'National bodies', 'Civil Society Organisations', 'Other', 'Related Links'];

          foreach($cats as $cat){
             Outputcategory::create(['title' => $cat,'slug' => str_slug($cat)] );
          }
    }
}
