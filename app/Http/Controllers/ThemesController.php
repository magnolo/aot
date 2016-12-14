<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Theme;
use DB;
class ThemesController extends Controller
{
    //
    public function all(Request $request){
      if($request->has('flattend')){
        if($request->get('flattend')){
            $themes = Theme::orderBy('title')->get();
        }
      }
      else{
          $themes = Theme::whereNull('parent_id')->with('children')->orderBy('title')->get();
      }


      return response()->success(['themes' => $themes]);
    }
    public function get($id){
        $theme = Theme::findOrFail($id)->load(['children','parent']);
        return response()->success(['theme' => $theme]);
    }
     public function create(Request $request){
       $theme = new Theme;
       $theme->title = $request->get('title');
       $theme->slug = str_slug($request->get('title'));
       $theme->parent_id = $request->get('parent_id');
       $success = $theme->save();
       return response()->success(['theme' => $theme , 'success' => $success]);
     }
     public function update(Request $request, $id){
       $theme = Theme::findOrFail($id);
       $theme->title = $request->get('title');
       $theme->slug = str_slug($request->get('title'));
       $theme->parent_id = $request->get('parent_id');
       $success = $theme->save();
       return response()->success(['theme' => $theme , 'success' => $success]);
     }
    public function removeBulk(Request $request, $ids){
      DB::beginTransaction();
      $ids = explode(',',$ids);
      $themes = Theme::destroy($ids);
      DB::commit();
      return response()->success(['success' => $ids]);
    }
}
