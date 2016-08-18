<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Country;

class CountriesController extends Controller
{
    //
    public function all(Request $request){
      if($request->has('groupBy')){
        $continents = Country::groupBy('continent')->orderBy('continent')->pluck('continent');
        $countries = array();
        foreach($continents as $continent){
          $c = array();
          $c['name'] = $continent;
          $c['nocheck'] = true;
          $c['children'] = Country::where('continent', $continent)->orderBy('name')->get();
          $countries[] = $c;
        }

      }
      else{
          $countries = Country::orderBy('name')->get();
      }

      return response()->success(['countries' => $countries]);
    }
}
