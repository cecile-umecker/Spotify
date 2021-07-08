<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="{{ asset('/manifest.json') }} " />

    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="app"></div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
