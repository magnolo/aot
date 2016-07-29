<?php

use Illuminate\Database\Seeder;

use App\Country;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $json = File::get("database/seeds/data/countries.json");
        $data = json_decode($json);
        $countries = $data->countries;

        foreach($countries as $country){
          Country::create([
            'code' => $country->countryCode,
            'iso_a3' => $country->isoAlpha3,
            'name' => $country->countryName,
            'continent' => $country->continentName,
            'continent_iso' => $country->continent

          ]);
        }
    }
}
