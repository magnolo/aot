<?php

use Illuminate\Database\Seeder;

use App\Group;

class TargetgroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $groups = ['Armed forces','Asylum seekers','Children','Detainees','Displaced persons','Drug addicts',
  				'Elderly persons','Ethnic minorities','Foreigners','Human rights defenders', 'Indigenous people',
  				'Journalists','Judges & prosecutors','Law enforcement personnel','LGBTI','Life-sentenced prisoners',
  				'Medical personnel','Non-state agent','Persons living with HIV/AIDS','Persons with albinism','Persons with disabilities',
  				'Poor people','Refugees','Religious minorities','Roma','Sick detainees','Stateless persons',
  				'Subsidiary protection beneficiaries','Traumatised persons','Unaccompanied minors','UN peacekeepers',
  				'Victim of trafficking','Victims of torture and ill-treatment','Victims of violence / SGBV','Vulnerable persons',
  				'Witness','Women and girls',
  		];

      foreach($groups as $group){

         Group::create([
          'title' => $group,
          'slug' => str_slug($group)
        ]);
      }
    }
}
