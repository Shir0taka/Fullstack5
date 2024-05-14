<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public $fillable = [
        'name', 
        'author', 
        'pages', 
        'price', 
        'created_at', 
        'updated_at'
    ];
}
