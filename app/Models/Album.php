<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;
    protected $appends = ['release_year'];

    public function artist()
    {
        return $this->belongsTo(Artist::class, 'artist_id', 'id');
    }

    public function genre()
    {
        return $this->belongsToMany(Genre::class, 'genres_albums', 'album_id', 'genre_id');
    }

    public function track()
    {
        return $this->hasMany(Track::class, 'album_id', 'id');
    }
    public function getReleaseYearAttribute(){
        return date('Y', $this->release_date);
    }
}
