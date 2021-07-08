<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    public function album()
    {
        return $this->belongsToMany(Album::class, 'genres_albums', 'genre_id', 'album_id');
    }
}
