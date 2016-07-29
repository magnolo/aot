<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Itemfile;
use File;
use Storage;

class FilesController extends Controller
{
    //
    public function upload(Request $request){
       $file = $request->file('file');

  		$extension = $file->getClientOriginalExtension();
  		Storage::disk('local')->put($file->getFilename().'.'.$extension,  File::get($file));
  		$entry = new Itemfile();
  		$entry->mime = $file->getClientMimeType();
  		$entry->original_filename = $file->getClientOriginalName();
  		$entry->filename = $file->getFilename().'.'.$extension;
  		$entry->ext = $extension;
      $entry->size = $request->get('size');

  		$entry->save();

		  return response()->success(['file' => $entry]);
    }
}
