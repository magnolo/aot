<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    //
    protected $table="sources";
    protected $appends = ['acronym_title'];

    public function getAcronymTitleAttribute(){
      if($this->acronym){
        return $this->acronym;
      }
      return $this->title;
    }

    public function children(){
      return $this->hasMany('App\Source', 'parent_id')->with('children');
    }
    public function parent(){
      return $this->hasOne('App\Source', 'parent_id')->with('parent');
    }
}
