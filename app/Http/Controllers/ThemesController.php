<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Theme;
class ThemesController extends Controller
{
    //
    public function all(Request $request){
      if($request->has('flattend')){
        if($request->get('flattend')){
            $themes = Theme::orderBy('title')->get();
        }
      }
      else{
          $themes = Theme::whereNull('parent_id')->with('children')->orderBy('title')->get();
      }


      return response()->success(['themes' => $themes]);
    }
}
