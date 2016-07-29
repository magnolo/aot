<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Type;

class TypesController extends Controller
{
    //
    public function all(){
      $types = Type::orderBy('title')->get();

      return response()->success(['types' => $types]);
    }
}
