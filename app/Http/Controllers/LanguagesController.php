<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Language;
use DB;

class LanguagesController extends Controller
{
    //
    public function all(){
      $languages = Language::orderBy('title')->get();

      return response()->success(['languages' => $languages]);
    }
    public function create(Request $request){
       $language = new Language;
       $language->title = $request->get('title');
       $language->short = $request->get('short');
       $success = $language->save();
       return response()->success(['language' => $language , 'success' => $success]);
     }
     public function update(Request $request, $id){
       $language = Language::findOrFail($id);
       $language->title = $request->get('title');
       $language->short = $request->get('short');
       $success = $language->save();
       return response()->success(['language' => $language , 'success' => $success]);
     }
    public function removeBulk(Request $request, $ids){
      DB::beginTransaction();
      $ids = explode(',',$ids);
      $languages = Language::destroy($ids);
      DB::commit();
      return response()->success(['success' => $ids]);
    }
}
