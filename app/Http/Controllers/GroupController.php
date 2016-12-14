<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Group;

use DB;

class GroupController extends Controller
{
    //
    public function all(){
      $groups = Group::orderBy('title')->get();

      return response()->success(['groups' => $groups]);
    }
     public function create(Request $request){
       $group = new Group;
       $group->title = $request->get('title');
       $group->slug = str_slug($request->get('title'));
       $success = $group->save();
       return response()->success(['group' => $group , 'success' => $success]);
     }
     public function update(Request $request, $id){
       $group = Group::findOrFail($id);
       $group->title = $request->get('title');
       $group->slug = str_slug($request->get('title'));
       $success = $group->save();
       return response()->success(['group' => $group , 'success' => $success]);
     }
    public function removeBulk(Request $request, $ids){
      DB::beginTransaction();
      $ids = explode(',',$ids);
      $categories = Group::destroy($ids);
      DB::commit();
      return response()->success(['success' => $ids]);
    }
}
