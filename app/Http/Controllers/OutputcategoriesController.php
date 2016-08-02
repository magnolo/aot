<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Outputcategory;

class OutputcategoriesController extends Controller
{
    //
    public function all(){
      $cats = Outputcategory::orderBy('title')->with('items')->get();

      return response()->success(['categories' => $cats]);
    }
}
