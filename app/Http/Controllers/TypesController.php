<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Type;

use DB;

class TypesController extends Controller
{
    //
    public function all(){
      $types = Type::orderBy('title')->get();

      return response()->success(['types' => $types]);
    }
     public function create(Request $request){
       $type = new Type;
       $type->title = $request->get('title');
       $type->slug = str_slug($request->get('title'));
       $success = $type->save();
       return response()->success(['type' => $type , 'success' => $success]);
     }
     public function update(Request $request, $id){
       $type = Type::findOrFail($id);
       $type->title = $request->get('title');
       $type->slug = str_slug($request->get('title'));
       $success = $type->save();
       return response()->success(['type' => $type , 'success' => $success]);
     }
    public function removeBulk(Request $request, $ids){
      DB::beginTransaction();
      $ids = explode(',',$ids);
      $categories = Type::destroy($ids);
      DB::commit();
      return response()->success(['success' => $ids]);
    }
}
