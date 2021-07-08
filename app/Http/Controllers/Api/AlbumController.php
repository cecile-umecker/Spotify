<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Album;
use Illuminate\Database\Eloquent\Collection;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return Album::with('track', 'genre', 'artist')->paginate(50);
    }

    /**
     * Display the specified resource.
     *
     * @param Album $album
     * @return Album|Collection
     */
    public function show(Album $album)
    {
        return Album::with('artist', 'genre', 'track')->find($album->id);
    }

    public function random()
    {
        return Album::all()->random(18);
    }
}
