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
      $instruments = $instruments->map(function($item, $key){
        if($item->acronym){
          $item->acronym_title = $item->acronym;
        }
        else{
          $item->acronym_title = $item->title;
        }
        return $item;
      });
      return response()->success(['instruments' => $instruments]);
    }
}
