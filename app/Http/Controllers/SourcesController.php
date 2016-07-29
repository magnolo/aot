<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Source;

class SourcesController extends Controller
{
    //
    public function all(){
      $sources = Source::with('children')->orderBy('title')->get();

      return response()->success(['sources' => $sources]);
    }
}
