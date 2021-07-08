<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    public function album()
    {
        return $this->hasMany(Album::class, 'artist_id', 'id'); // leftjoin
    }
}
