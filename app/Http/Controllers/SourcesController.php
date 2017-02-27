<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Source;

use DB;

class SourcesController extends Controller
{
    //
    public function all(){
      $sources = Source::whereNull('parent_id')->with('children')->orderBy('title')->get();

      return response()->success(['sources' => $sources]);
    }
     public function get($id){
        $source = Source::findOrFail($id)->load(['children','parent']);
        return response()->success(['source' => $source]);
    }

     public function create(Request $request){
       $source = new Source;
       $source->title = $request->get('title');
       $source->slug = str_slug($request->get('title'));
       $source->parent_id = $request->get('parent_id');
       $source->acronym = $request->get('acronym');
       $success = $source->save();
       return response()->success(['source' => $source , 'success' => $success]);
     }
     public function update(Request $request, $id){
       $source = Source::findOrFail($id);
       $source->title = $request->get('title');
       $source->slug = str_slug($request->get('title'));
       $source->acronym = $request->get('acronym');
       $source->parent_id = $request->get('parent_id');
       $success = $source->save();
       return response()->success(['source' => $source , 'success' => $success]);
     }
    public function removeBulk(Request $request, $ids){
      DB::beginTransaction();
      $ids = explode(',',$ids);
      $instruments = Source::destroy($ids);
      DB::commit();
      return response()->success(['success' => $ids]);
    }
}
