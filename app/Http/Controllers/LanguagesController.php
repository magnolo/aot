<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Language;

class LanguagesController extends Controller
{
    //
    public function all(){
      $languages = Language::orderBy('title')->get();

      return response()->success(['languages' => $languages]);
    }
}
