<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Instrument;

class InstrumentController extends Controller
{
    //
    public function all(){
      $instruments = Instrument::whereNull('parent_id')->with('children')->orderBy('title')->get();

      return response()->success(['instruments' => $instruments]);
    }
}
