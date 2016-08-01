<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Country;

class CountriesController extends Controller
{
    //
    public function all(){
      $countries = Country::orderBy('name')->get();

      return response()->success(['countries' => $countries]);
    }
}
