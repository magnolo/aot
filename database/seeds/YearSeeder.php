<?php

use Illuminate\Database\Seeder;

use App\Year;

class YearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for($year = 2000; $year <= 2016; $year++){
          Year::create(['year' => $year]);
        }
    }
}
