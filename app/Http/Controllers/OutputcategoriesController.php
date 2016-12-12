<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Outputcategory;
use DB;

class OutputcategoriesController extends Controller
{
    //
    public function all(){
      $cats = Outputcategory::orderBy('title')->with('items')->get();

      return response()->success(['categories' => $cats]);
    }
    public function create(Request $request){
       $category = new Outputcategory;
       $category->title = $request->get('title');
       $success = $category->save();
       return response()->success(['category' => $category , 'success' => $success]);
     }
     public function update(Request $request, $id){
       $category = Outputcategory::findOrFail($id);
       $category->title = $request->get('title');
       $success = $category->save();
       return response()->success(['category' => $category , 'success' => $success]);
     }
    public function removeBulk(Request $request, $ids){
      DB::beginTransaction();
      $ids = explode(',',$ids);
      $categories = Outputcategory::destroy($ids);
      DB::commit();
      return response()->success(['success' => $ids]);
    }
}
