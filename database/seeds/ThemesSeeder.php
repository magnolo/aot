<?php

use Illuminate\Database\Seeder;
use Illuminate\Console\Command;

use App\Theme;

class ThemesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $themes = [
          [
  					'name' => 'Definition of torture & ill-treatment',
  					'entries' => [
  						[
  							'name' => 'Definition of torture',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Definition of ill-treatment',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Capital punishment',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Corporal punishment',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Excessive use of force',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Gender based violence',
  							'acronym'=> '',
  							'entries'=> [
  								[
  									'name'=> 'Domestic violence',
  									'acronym'=> '',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Female genital mutilation',
  									'acronym'=> '',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Abortions',
  									'acronym'=> '',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Early and forced marriage',
  									'acronym'=> '',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Rape',
  									'acronym'=> '',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Reproductive rights',
  									'acronym'=> '',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Feminicide',
  									'acronym'=> '',
  									'entries'=> []
  								]
  							]
  						],
  						[
  							'name'=> 'Violence on grounds of sexual orientation and gender identity',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Trafficking',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Violence in the armed forces',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Forced labour',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Violence against children',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Harmful traditional practices',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Other',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Criminalisation',
  					'acronym'=> '',
  					'entries'=> []
  				],
  				[
  					'name'=> 'Jurisdiction',
  					'acronym'=> '',
  					'entries'=> [
  						[
  							'name'=> 'Universal jurisdiction',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Extraterritorial jurisdiction',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Other',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Prevention',
  					'acronym'=> '',
  					'entries'=> [
  						[
  							'name'=> 'Absolute prohibition',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Superior orders',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Evidence extracted by torture',
  					'acronym'=> '',
  					'entries'=> []
  				],
  				[
  					'name'=> 'Safeguards',
  					'acronym'=> '',
  					'entries'=> [
  						[
  							'name'=> 'Interrogation rules',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Prison rules',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Legal assistance',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Medical examination',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Notification of family',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Access to information',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Judicial oversight',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Audio- or videotaping of interrogations',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Central registry for detainees',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Other',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Complaints',
  					'acronym'=> '',
  					'entries'=> []
  				],
  				[
  					'name'=> 'Investigation',
  					'acronym'=> '',
  					'entries'=> []
  				],
  				[
  					'name'=> 'Remedy & reparation',
  					'acronym'=> '',
  					'entries'=> [
  						[
  							'name'=> 'Restitution',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Compensation',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Rehabilitation',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Satisfaction and right to truth',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Guarantees of non-repetition',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Other',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Non-refoulement',
  					'acronym'=> '',
  					'entries'=> [
  						[
  							'name'=> 'Risk assessment',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Diplomatic assurances',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Interim measures',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Extraterritorial jurisdiction',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Extradition',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Indirect refoulement',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Offshore processing',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Access to procedures',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Accelerated procedures',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Transfer of detainees',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Extraordinary Renditions',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Readmission agreements',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Other',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Committee against Torture',
  					'acronym'=> '',
  					'entries'=> [
  						[
  							'name'=> 'Rules of procedure',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'State reporting',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Inquiry procedure',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Inter-State communications',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Individual complaints',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Privileges and immunities',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Other',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Detention',
  					'acronym'=> '',
  					'entries'=> [
  						[
  							'name'=> 'Detention conditions',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Overcrowding',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Prisons',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Police stations',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Psychiatric institutions',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Health-care settings',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Social welfare institutions',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Immigration detention',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Inter-prisoner violence',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Juvenile detention',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Women in detention',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Pre-trial detention',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Alternative measures to detention',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Arbitrary detention',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Secret detention',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Sexual violence in detention',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Incommunicado detention',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Solitary confinement',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Searches',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Electrical discharge of weapons',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Deaths in custody',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Training of personnel',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Interrogation rules',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Prison rules',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Restraint measures',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Reinsertion programmes',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Health care for detainees',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Other',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Detention Monitoring',
  					'acronym'=> '',
  					'entries'=> [
  						[
  							'name'=> 'National Preventive Mechanisms',
  							'acronym'=> 'NPM',
  							'entries'=> []
  						],
  						[
  							'name'=> 'UN Subcommittee on Prevention of Torture',
  							'acronym'=> 'SPT',
  							'entries'=> []
  						],
  						[
  							'name'=> 'European Committee for the Prevention of Torture',
  							'acronym'=> 'CPT',
  							'entries'=> []
  						],
  						[
  							'name'=> 'UN Special Rapporteur on Torture',
  							'acronym'=> 'UNSRT',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Unannounced visits',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Other',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Systemic Factors',
  					'acronym'=> '',
  					'entries'=> [
  						[
  							'name'=> 'Combating terrorism',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Corruption',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Drug policies',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Death penalty',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Enforced disappereances',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Reprisals',
  							'acronym'=> '',
  							'entries'=> []
  						],
  						[
  							'name'=> 'Other',
  							'acronym'=> '',
  							'entries'=> []
  						]
  					]
  				],
  				[
  					'name'=> 'Other',
  					'acronym'=> '',
  					'entries'=> []
  				]
    		];

        foreach($themes as $theme){

          $parent = Theme::create([
            'slug' => str_slug($theme['name']),
            'title' => $theme['name']
          ]);
          
          if(count($theme['entries'])){
            foreach($theme['entries'] as $child){

              $childItem =  Theme::create([
                'slug' => str_slug($child['name']),
                'title' => $child['name'],
                'parent_id' => $parent->id
              ]);
              if(count($child['entries'])){
                foreach($child['entries'] as $child1){
                  $child1Item =  Theme::create([
                    'slug' => str_slug($child1['name']),
                    'title' => $child1['name'],
                    'parent_id' => $childItem->id
                  ]);
                  if(count($child1['entries'])){
                    foreach($child1['entries'] as $child2){
                      $child2Item =  Theme::create([
                        'slug' => str_slug($child2['name']),
                        'title' => $child2['name'],
                        'parent_id' => $child1Item->id
                      ]);
                    }
                  }
                }
              }
            }
          }
        }
    }
}
