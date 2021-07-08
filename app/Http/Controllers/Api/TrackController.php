<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Track;
use Illuminate\Database\Eloquent\Collection;

class TrackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        return Track::with('album')->paginate(50);
    }

    /**
     * Display the specified resource.
     *
     * @param Track $track
     * @return Track|Collection
     */
    public function show(Track $track)
    {
        return Track::with('album')->find($track->id);
    }
}
