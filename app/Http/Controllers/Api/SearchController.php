<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Album;
use App\Models\Artist;
use App\Models\Genre;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index($search)
    {
        $query['albums'] = Album::with('artist')
            ->where('name', $search)
            ->orWhere('name', 'like', '%' . $search . '%')
            ->orderBy('popularity', 'DESC')
            ->limit(4)
            ->get();

        $query['artists'] = Artist::where('name', $search)
            ->orWhere('name', 'like', '%' . $search . '%')
            ->limit(4)
            ->get();

        $query['genres'] = Genre::where('name', $search)
            ->orWhere('name', 'like', '%' . $search . '%')
            ->limit(4)
            ->get();

        return $query;
    }

    public function album($album)
    {
        return Album::where('name', $album)
            ->orWhere('name', 'like', '%' . $album . '%')
            ->paginate(20);
    }

    public function artist($artist)
    {
        return Artist::where('name', $artist)
            ->orWhere('name', 'like', '%' . $artist . '%')
            ->paginate(20);
    }

    public function genre($genre)
    {
        return Genre::where('name', $genre)
            ->orWhere('name', 'like', '%' . $genre . '%')
            ->paginate(20);
    }
}
