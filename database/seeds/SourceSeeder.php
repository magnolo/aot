<?php

use Illuminate\Database\Seeder;

use App\Source;

class SourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //
        $sources = [
       			[
         				'name'=>'UN Bodies',
  							'acronym'=>'',
  							'entries'=>[
  								[
  									'name'=> 'Committee against Torture',
  									'acronym'=> 'CAT',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Subcommittee on Prevention of Torture',
  									'acronym'=> 'SPT',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Human Rights Committee',
  									'acronym'=> 'CCPR',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Committee on Enforced Disappearances',
  									'acronym'=> 'CED',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Committee on the Elimination of Discrimination against Women',
  									'acronym'=> 'CEDAW',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Committee on the Rights of the Child',
  									'acronym'=> 'CRC',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Committee on the Rights of Persons with Disabilities',
  									'acronym'=> 'CRPD',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Special Rapporteur on Torture',
  									'acronym'=> 'SRT',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Other Special Procedures',
  									'acronym'=> '',
  									'entries'=> [
  										[
  											'name'=> 'Special Tribunals',
  											'acronym'=> '',
  											'entries'=> []
  										],
  										[
  											'name'=> 'International Criminal Court',
  											'acronym'=> 'ICC',
  											'entries'=> []
  										],
  										[
  											'name'=> 'International Court of Justice',
  											'acronym'=> 'ICJ',
  											'entries'=> []
  										],
  										[
  											'name'=> 'UN Office on Drugs and Crime',
  											'acronym'=> 'UNODC',
  											'entries'=> []
  										],
  										[
  											'name'=> 'UN Fund for Victims of Torture',
  											'acronym'=> 'UNVFVT',
  											'entries'=> []
  										]
  									]
  								]
  							]
  					],
  					[
         				'name'=>'Regional bodies',
  							'acronym'=>'',
  							'entries'=>[
  								[
  									'name'=> 'African Commission on Human Rights and People’s Rights',
  									'acronym'=> 'ACHPR',
  									'entries'=> []
  								],
  								[
  									'name'=> 'African Court on Human Rights and People’s Rights',
  									'acronym'=> 'AfCHPR',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Special Rapporteur on Prisons and Conditions of Detention in Africa',
  									'acronym'=> '',
  									'entries'=> []
  								],
  								[
  									'name'=> 'CoE Commissioner for Human Rights',
  									'acronym'=> '',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Committee for the Prevention of Torture in Africa',
  									'acronym'=> 'CPTA',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Council of Europe',
  									'acronym'=> 'CoE',
  									'entries'=> []
  								],
  								[
  									'name'=> 'European Court of Human Rights',
  									'acronym'=> 'ECtHR',
  									'entries'=> []
  								],
  								[
  									'name'=> 'Court of Justice of the European Union',
  									'acronym'=> 'CJEU',
  									'entries'=> []
  								],
  								[
  									'name'=> 'European Commission',
  									'acronym'=> 'EC',
  									'entries'=> [
  										[
  											'name'=> 'European Committee for the Prevention of Torture',
  											'acronym'=> 'CPT',
  											'entries'=> []
  										],
  										[
  											'name'=> 'European Court of Human Rights',
  											'acronym'=> 'ECHR',
  											'entries'=> []
  										],
  										[
  											'name'=> 'European Parliament',
  											'acronym'=> 'EP',
  											'entries'=> []
  										],
  										[
  											'name'=> 'European Union Agency for Fundamental Rights',
  											'acronym'=> 'FRA',
  											'entries'=> []
  										],
  										[
  											'name'=> 'Inter-American Commission of Human Rights',
  											'acronym'=> 'IACHR',
  											'entries'=> []
  										],
  										[
  											'name'=> 'Inter-American Court of Human Rights',
  											'acronym'=> '',
  											'entries'=> []
  										],
  										[
  											'name'=> 'Special Rapporteur on the Rights of Persons Deprived of their Liberty in the Americas',
  											'acronym'=> '',
  											'entries'=> []
  										],
  										[
  											'name'=> 'OSCE Office for Democratic Institutions and Human Rights',
  											'acronym'=> 'OSCE/ODIHR',
  											'entries'=> []
  										]
  									]
  								]
  							]
       			],
  					[
         			'name'=>'National bodies',
  						'acronym'=>'',
  						'entries'=>[
  							[
  								'name'=> 'Domestic court',
  								'acronym'=> '',
  								'entries'=> []
  							],
  							[
  								'name'=> 'National Human Rights Institutions',
  								'acronym'=> 'NHRI',
  								'entries'=> []
  							],
  							[
  								'name'=> 'National Preventive Mechanisms',
  								'acronym'=> 'NPM',
  								'entries'=> []
  							],
  							[
  								'name'=> 'State bodies',
  								'acronym'=> '',
  								'entries'=> []
  							]
  						]
       			],
  					[
         			'name'=>'Civil society organisations',
  						'acronym'=>'',
  						'entries'=>[
  							[
  								'name'=> 'American Civil Liberties Union',
  								'acronym'=> 'ACLU',
  								'entries'=> []
  							],
  							[
  								'name'=> 'Amnesty International',
  								'acronym'=> '',
  								'entries'=> []
  							],
  							[
  								'name'=> 'Anti Torture Initiative',
  								'acronym'=> '',
  								'entries'=> []
  							],
  							[
  								'name'=> 'Article 5 Initiative',
  								'acronym'=> '',
  								'entries'=> []
  							],
  							[
  								'name'=> 'Association for the Prevention of Torture',
  								'acronym'=> 'APT',
  								'entries'=> []
  							],
  							[
  								'name'=> 'Centre for Civil and Political Rights',
  								'acronym'=> 'CCPR Centre',
  								'entries'=> []
  							],
  							[
  								'name'=> 'Centre for Constitutional Rights',
  								'acronym'=> 'CCR',
  								'entries'=> []
  							],
  							[
  								'name'=> 'Convention against Torture Initiative',
  								'acronym'=> 'CTI Initiative',
  								'entries'=> []
  							],
  							[
  								'name'=> 'DIGNITY',
  								'acronym'=> '',
  								'entries'=> [
  									[
  										'name'=> 'FIACAT',
  										'acronym'=> '',
  										'entries'=> []
  									],
  									[
  										'name'=> 'International Federation for Human Rights',
  										'acronym'=> 'FIDH',
  										'entries'=> []
  									],
  									[
  										'name'=> 'Human Rights Watch',
  										'acronym'=> 'HRW',
  										'entries'=> []
  									],
  									[
  										'name'=> 'INTERIGHTS',
  										'acronym'=> '',
  										'entries'=> []
  									],
  									[
  										'name'=> 'International Rehabilitation Council for Torture Victims',
  										'acronym'=> 'IRCT',
  										'entries'=> []
  									],
  									[
  										'name'=> 'Marshall Project',
  										'acronym'=> '',
  										'entries'=> []
  									],
  									[
  										'name'=> 'World Organisation Against Torture',
  										'acronym'=> 'OMCT',
  										'entries'=> []
  									],
  									[
  										'name'=> 'Penal Reform International',
  										'acronym'=> 'PRI',
  										'entries'=> []
  									],
  									[
  										'name'=> 'Physicians for Human Rights',
  										'acronym'=> '',
  										'entries'=> []
  									],
  									[
  										'name'=> 'Redress',
  										'acronym'=> '',
  										'entries'=> []
  									],
  									[
  										'name'=> 'Reprieve',
  										'acronym'=> '',
  										'entries'=> []
  									],
  									[
  										'name'=> 'Torture Reporting Book',
  										'acronym'=> '',
  										'entries'=> []
  									],
  									[
  										'name'=> 'TRIAL',
  										'acronym'=> '',
  										'entries'=> []
  									]
  								]
  							]
  						]
       			],
  					[
         				'name'=>'Other',
  							'acronym'=>'',
  							'entries'=>[]
       			],
  				];
          foreach($sources as $source){

            $parent = Source::create([
              'slug' => str_slug($source['name']),
              'title' => $source['name'],
              'acronym' => $source['acronym']
            ]);

            if(count($source['entries'])){
              foreach($source['entries'] as $child){

                $childItem =  Source::create([
                  'slug' => str_slug($child['name']),
                  'title' => $child['name'],
                  'acronym' => $child['acronym'],
                  'parent_id' => $parent->id
                ]);
                if(count($child['entries'])){
                  foreach($child['entries'] as $child1){
                    $child1Item =  Source::create([
                      'slug' => str_slug($child1['name']),
                      'title' => $child1['name'],
                        'acronym' => $child1['acronym'],
                      'parent_id' => $childItem->id
                    ]);
                    if(count($child1['entries'])){
                      foreach($child1['entries'] as $child2){
                        $child2Item =  Source::create([
                          'slug' => str_slug($child2['name']),
                          'title' => $child2['name'],
                          'acronym' => $child2['acronym'],
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
