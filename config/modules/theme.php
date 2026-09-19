<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Theme Configuration
    |--------------------------------------------------------------------------
    |
    | These settings allow you to set custom hex values for the Panel's theme.
    | This can be configured in the admin pages, and can also be edited here
    | for ease of use.
    |
    */
    'colors' => [
        'primary' => env('THEME_COLORS_PRIMARY', '#3b82f6'),
        'secondary' => env('THEME_COLORS_SECONDARY', '#12161d'),

        'background' => env('THEME_COLORS_BACKGROUND', '#0a0e14'),
        'headers' => env('THEME_COLORS_HEADERS', '#171b23'),
        'sidebar' => env('THEME_COLORS_SIDEBAR', '#0d1117'),
    ],
];
