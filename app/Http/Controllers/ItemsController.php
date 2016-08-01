<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Item;
use App\Theme;
use App\Year;
use App\Author;

class ItemsController extends Controller
{
    //
    public function all(){
      $items = Item::with(['authors', 'themes', 'years', 'file', 'language','category', 'source'])->get();

      return response()->success(['items' => $items]);
    }
    public function show($id){
      $item = Item::findOrFail($id);
      $item->load(['authors', 'themes', 'years', 'file', 'language','category', 'source']);
      return response()->success(['item' => $item]);
    }
    public function create(Request $request){
      $item = new Item;
      $item->document_title = $request->get('document_title');
      $item->screen_title = $request->get('screen_title');
      $item->short_description = $request->get('description');
      $item->category_id = $request->get('output_category_id');
      $item->type_id = $request->get('file_type_id');
      $item->language_id = $request->get('language_id');
      $item->file_id = $request->get('file_id');
      $item->source_id = $request->get('sources');
      $item->save();

      foreach($request->get('authors') as $a){
        $author = Author::find($a);
        $item->authors()->attach($author);
      }
      foreach($request->get('themes') as $t){
        $theme = Theme::find($t['id']);
        $item->themes()->attach($theme);
      }
      foreach($request->get('years') as $y){
        $year = Year::find($y);
        $item->years()->attach($year);
      }

      return response()->success(['item' => $item]);
    }
}
