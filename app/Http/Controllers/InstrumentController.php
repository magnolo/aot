<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Instrument;

use DB;

class InstrumentController extends Controller
{
    //
    public function all(){
      $instruments = Instrument::whereNull('parent_id')->with('children')->orderBy('title')->get();
      return response()->success(['instruments' => $instruments]);
    }

    public function get($id){
        $instrument = Instrument::findOrFail($id)->load(['children','parent']);
        return response()->success(['instrument' => $instrument]);
    }

     public function create(Request $request){
       $instrument = new Instrument;
       $instrument->title = $request->get('title');
       $instrument->slug = str_slug($request->get('title'));
       $instrument->parent_id = $request->get('parent_id');
       $instrument->acronym = $request->get('acronym');
       $success = $instrument->save();
       return response()->success(['instrument' => $instrument , 'success' => $success]);
     }
     public function update(Request $request, $id){
       $instrument = Instrument::findOrFail($id);
       $instrument->title = $request->get('title');
       $instrument->slug = str_slug($request->get('title'));
       $instrument->acronym = $request->get('acronym');
       $instrument->parent_id = $request->get('parent_id');
       $success = $instrument->save();
       return response()->success(['instrument' => $instrument , 'success' => $success]);
     }
    public function removeBulk(Request $request, $ids){
      DB::beginTransaction();
      $ids = explode(',',$ids);
      $instruments = Instrument::destroy($ids);
      DB::commit();
      return response()->success(['success' => $ids]);
    }
}
