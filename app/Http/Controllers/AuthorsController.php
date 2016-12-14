<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Author;

use DB;

class AuthorsController extends Controller
{
    //
    public function all(){
      $authors = Author::orderBy('lastname')->get();

      return response()->success(['authors' => $authors]);
    }
    public function create(Request $request){
       $author = new Author;
       $author->name = $request->get('name');
       $author->slug = str_slug($request->get('name'));
       $success = $author->save();
       return response()->success(['author' => $author , 'success' => $success]);
     }
     public function update(Request $request, $id){
       $author = Author::findOrFail($id);
       $author->name = $request->get('name');
       $author->slug = str_slug($request->get('name'));
       $success = $author->save();
       return response()->success(['author' => $author , 'success' => $success]);
     }
    public function removeBulk(Request $request, $ids){
      DB::beginTransaction();
      $ids = explode(',',$ids);
      $authors = Author::destroy($ids);
      DB::commit();
      return response()->success(['success' => $ids]);
    }
}
