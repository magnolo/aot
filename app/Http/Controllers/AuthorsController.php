<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Author;

class AuthorsController extends Controller
{
    //
    public function all(){
      $authors = Author::orderBy('lastname')->get();

      return response()->success(['authors' => $authors]);
    }
}
