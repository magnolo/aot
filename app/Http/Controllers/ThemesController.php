<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Theme;
class ThemesController extends Controller
{
    //
    public function all(){
      $themes = Theme::orderBy('title')->get();

      return response()->success(['themes' => $themes]);
    }
}
