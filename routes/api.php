<?php

use App\Http\Controllers\Api\AlbumController;
use App\Http\Controllers\Api\ArtistController;
use App\Http\Controllers\Api\GenreController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\TrackController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

### SEARCH API ###
Route::get('search/albums/{search}', [SearchController::class, 'album']);
Route::get('search/artists/{search}', [SearchController::class, 'artist']);
Route::get('search/genres/{search}', [SearchController::class, 'genre']);
Route::get('search/all/{search}', [SearchController::class, 'index']);

### SHUFFLE ALBUMS
Route::get('albums/random', [AlbumController::class, 'random']);

### RESSOURCES API
Route::apiResource('artists', ArtistController::class)
    ->only(['index', 'show']);
Route::apiResource('albums', AlbumController::class)
    ->only(['index', 'show']);
Route::apiResource('tracks', TrackController::class)
    ->only(['index', 'show']);
Route::apiResource('genres', GenreController::class)
    ->only(['index', 'show']);

