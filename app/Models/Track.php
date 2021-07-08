<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    use HasFactory;
    protected $appends = ['duration_format'];

    public function album()
    {
        return $this->hasOne(Album::class, 'id', 'album_id');
    }
    public function getDurationFormatAttribute()
    {
        return date('i:s', $this->duration);
    }
}
