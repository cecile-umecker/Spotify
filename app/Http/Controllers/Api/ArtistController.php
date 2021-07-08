<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Artist;
use Illuminate\Database\Eloquent\Collection;

class ArtistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return Artist::with('album')->paginate(50);
    }

    /**
     * Display the specified resource.
     *
     * @param Artist $artist
     * @return Artist|Collection
     */
    public function show(Artist $artist)
    {
        return Artist::with('album')->find($artist->id);
    }
}
