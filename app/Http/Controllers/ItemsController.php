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
    public function all(Request $request){
        $items = Item::with(['authors', 'themes', 'years', 'file', 'language','category', 'source', 'countries', 'groups', 'instruments']);
        if($request->has('limit')) $items = $items->take($request->get('limit'));
        if($request->has('page')) $items = $items->skip(($request->get('page')*$request->get('limit'))-$request->get('limit'));
        // if($request->has('order')) $items = $items->orderBy($request->get('order'));
        if($request->has('filter')){
            $items = $items->where('document_title', 'like', '%'.$request->get('filter'). '%')->orWhere('screen_title', 'like', '%'.$request->get('filter'). '%');
            $count = $items->count();
        }
        else{
            $count = Item::all()->count();
        }
        if($request->has('category')){
            $items = $items->where('category_id', $request->get('category'));
            $count = $items->count();
        }
        if($request->has('source')){
            $items = $items->where('source_id', $request->get('source'));
            $count = $items->count();
        }
        $items = $items->orderBy('screen_title', 'ASC');
        $items = $items->get();

        return response()->success(['items' => $items, 'count' => $count]);
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
        $item->url = $request->get('url');
        $item->comment = $request->get('comment');

        if(!$item->document_title){
            if($item->screen_title){
                $item->document_title = $item->screen_title;
            }
            else{
                $item->document_title = $item->url;
            }
        }
        if(!$item->type_id){
            $item->type_id = 0;
        }

        $item->save();

        if($request->has('authors')){
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
        }

        if($request->has('themes')){
            foreach($request->get('themes') as $t){
                $theme = Theme::find($t['id']);
                $item->themes()->attach($theme);
            }
        }

        if($request->has('years')){
            foreach($request->get('years') as $y){
                $year = Year::find($y);
                $item->years()->attach($year);
            }
        }

        if($request->has('countries')){
            foreach($request->get('countries') as $c){
                foreach($c['countries'] as $count){
                    $theme_id = null;
                    if(isset($c['theme']['id'])){
                        $theme_id = $c['theme']['id'];
                        //dd($c);
                    }
                    $country = Country::find($count['id']);
                    $item->countries()->attach($country,['theme_id' => $theme_id]);
                }
            }
        }

        if($request->has('groups')){
            foreach($request->get('groups') as $g){
                $theme_id = null;
                if(isset($g['theme']['id'])){
                    $theme_id = $g['theme']['id'];
                }
                $group = Group::find($g['group']['id']);
                $item->groups()->attach($group,['theme_id' => $theme_id]);
            }
        }

        if($request->has('instruments')){
            foreach($request->get('instruments') as $i){
                $theme_id = null;
                if(isset($i['theme']['id'])){
                    $theme_id = $i['theme']['id'];
                }
                $instrument = Instrument::find($i['instrument']['id']);
                $item->instruments()->attach($instrument,['theme_id' => $theme_id]);
            }
        }

        if($request->has('paragraphs')){
            foreach($request->get('paragraphs') as $i){
                $instrument = Instrument::find($i['paragraph']);
                $item->instruments()->attach($instrument,['parent_id' => $i['instrument']['id']]);
            }
        }

        DB::commit();
        return response()->success(['item' => $item]);
    }

    public function update(Request $request, $id){
        DB::beginTransaction();

        $item = Item::findOrFail($id);

        if($request->query('full')){
            $item->document_title = $request->get('document_title');
            $item->screen_title = $request->get('screen_title');
            $item->short_description = $request->get('short_description');
            $item->category_id = $request->get('category_id');
            $item->language_id = $request->get('language_id');
            $item->source_id = $request->get('source_id');
            $item->type_id = $request->get('type_id');
            $item->url = $request->get('url');
            $item->comment = $request->get('comment');
            $success = $item->save();

            $item->authors()->detach();
            if($request->has('authors')){
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
            }
            $item->themes()->detach();
            if($request->has('themes')){
                foreach($request->get('themes') as $t){
                    $theme = Theme::find($t['id']);
                    $item->themes()->attach($theme);
                }
            }
            $item->years()->detach();
            if($request->has('years')){
                foreach($request->get('years') as $y){
                    $year = Year::find($y);
                    $item->years()->attach($year);
                }
            }
            $item->countries()->detach();
            if($request->has('countries')){
                foreach($request->get('countries') as $c){
                    foreach($c['countries'] as $count){
                        $theme_id = null;
                        if(isset($c['theme']['id'])){
                            $theme_id = $c['theme']['id'];
                            //dd($c);
                        }
                        $country = Country::find($count['id']);
                        $item->countries()->attach($country,['theme_id' => $theme_id]);
                    }
                }
            }
            $item->groups()->detach();
            if($request->has('groups')){
                foreach($request->get('groups') as $g){
                    $theme_id = null;
                    if(isset($g['theme']['id'])){
                        $theme_id = $g['theme']['id'];
                    }
                    $group = Group::find($g['group']['id']);
                    $item->groups()->attach($group,['theme_id' => $theme_id]);
                }
            }
            $item->instruments()->detach();
            if($request->has('instruments')){
                foreach($request->get('instruments') as $i){
                    $theme_id = null;
                    if(isset($i['theme']['id'])){
                        $theme_id = $i['theme']['id'];
                    }
                    $instrument = Instrument::find($i['instrument']['id']);
                    $item->instruments()->attach($instrument,['theme_id' => $theme_id]);
                }
            }

            if($request->has('paragraphs')){
                foreach($request->get('paragraphs') as $i){
                    $instrument = Instrument::find($i['paragraph']);
                    $item->instruments()->attach($instrument,['parent_id' => $i['instrument']['id']]);
                }
            }
        }
        else{
        //  dd( $request->only(['comment', 'document_title', 'language_id', 'screen_title', 'short_description', 'source_id']));
          //  $mainData = $request->only(['comment', 'document_title', 'language_id', 'screen_title', 'short_description', 'source_id']);

            $item->comment = $request->get('comment');
            $item->document_title = $request->get('document_title');
            $item->language_id = $request->get('language_id');
            $item->screen_title = $request->get('screen_title');
            $item->short_description = $request->get('short_description');
            $item->source_id = $request->get('source_id');

            //dd($mainData);

            $success = $item->save();
        }
        DB::commit();

        $item = $item->first();
        $item->load(['authors', 'themes', 'years', 'file', 'language','category', 'source', 'countries', 'groups', 'instruments']);

        return response()->success(['item' => $item , 'success' => $success]);
    }

    public function removeBulk(Request $request, $ids){

        $ids = explode(',',$ids);
        $items = Item::destroy($ids);

        return response()->success(['success' => $ids]);
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
