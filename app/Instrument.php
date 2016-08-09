<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Instrument extends Model
{
    //
    protected $table = 'legalinstruments';
    protected $appends = ['acronym_title'];

    public function getAcronymTitleAttribute(){
      if($this->acronym){
        return $this->acronym;
      }
      return $this->title;
    }

    public function children(){
      return $this->hasMany('App\Instrument', 'parent_id')->with('children');
    }
    public function parent(){
      return $this->hasOne('App\Instrument', 'parent_id')->with('parent');
    }
}
