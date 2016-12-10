<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //  $this->call(OutputcategoriesSeeder::class);
        //  $this->call(ItemTypesSeeder::class);
        //  $this->call(ThemesSeeder::class);
        //  $this->call(SourceSeeder::class);
        //  //$this->call(AuthorsSeeder::class);
        //  $this->call(LanguageSeeder::class);
        //  $this->call(TargetgroupSeeder::class);
        //  $this->call(CountriesSeeder::class);
        //  $this->call(LegalSeeder::class);
        //  $this->call(YearSeeder::class);
        //  $this->call(RolesSeeder::class);
        //  $this->call(UserSeeder::class);
        $this->call(FileSeeder::class);
    }
}
