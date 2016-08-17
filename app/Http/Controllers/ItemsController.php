<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Requests;

use App\Item;
use App\Theme;
use App\Year;
use App\Author;
use App\Country;
use App\Instrument;
use App\Group;
use Storage;

use DB;

class ItemsController extends Controller
{
    //
    public function all(){
      $items = Item::with(['authors', 'themes', 'years', 'file', 'language','category', 'source', 'countries', 'groups', 'instruments'])->get();

      return response()->success(['items' => $items]);
    }
    public function show($id){
      $item = Item::findOrFail($id);
      $item->load(['authors', 'themes', 'years', 'file', 'language','category', 'source', 'countries', 'groups', 'instruments']);
      return response()->success(['item' => $item]);
    }
    public function create(Request $request){
      DB::beginTransaction();
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
          if(isset($a['id'])){
            $author = Author::find($a['id']);
          }
          else{
            $author = new Author;
            $author->slug = str_slug($a['name']);
            $author->name = $a['name'];
            $author->save();
          }
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
        foreach($request->get('countries') as $c){
          foreach($c['countries'] as $count){
            $country = Country::find($count['id']);
            $item->countries()->attach($country,['theme_id' => $c['theme']['id']]);
          }
        }
        foreach($request->get('groups') as $g){
          $group = Group::find($g['group']['id']);
          $item->groups()->attach($group,['theme_id' => $g['theme']['id']]);
        }
        foreach($request->get('instruments') as $i){
          $instrument = Instrument::find($i['instrument']['id']);
          $item->instruments()->attach($instrument,['theme_id' => $i['theme']['id']]);
        }
        foreach($request->get('paragraphs') as $i){
          $instrument = Instrument::find($i['paragraph']);
          $item->instruments()->attach($instrument,['parent_id' => $i['instrument']['id']]);
        }

      DB::commit();
      return response()->success(['item' => $item]);
    }

    public function download($id){
      $item = Item::findOrFail($id);
      $item->load('file');
      $file = Storage::disk('local')->get($item->file->filename);

       return (new Response($file, 200))
               ->header('Content-Type', $item->file->mime)
               ->header('Content-Length', $item->file->size)
               ->header('Content-Disposition', 'attachment; filename="'.$item->document_title.'"');
      //return response()->download(storage_path().$item->file->filename, $item->document_tile, ['Content-Type' => $item->file->mime]);
    }
}
