<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Source;

class SourcesController extends Controller
{
    //
    public function all(){
      $sources = Source::whereNull('parent_id')->with('children')->orderBy('title')->get();

      return response()->success(['sources' => $sources]);
    }
}
