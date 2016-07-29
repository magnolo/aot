<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Year;

class YearController extends Controller
{
    //
    public function all(){
      $years = Year::orderBy('year', 'DESC')->get();

      return response()->success(['years' => $years]);
    }
}
