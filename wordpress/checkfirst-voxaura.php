<?php
/**
 * Plugin Name: CheckFirst VoxAura presentation
 * Description: Versioned presentation layer for the WordPress source and FlowSEO static exports.
 * Version: 1.1.0
 */
if (!defined('ABSPATH')) { exit; }
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('checkfirst-voxaura', plugins_url('checkfirst-voxaura/theme-sections.css', __FILE__), array(), null);
}, 100);
// Use established public-site paths; the exporter preserves relative navigation.
add_action('astra_header_after', function () {
    echo '<nav class="cf-blog-navigation" aria-label="CheckFirst navigation">';
    foreach (array('/' => 'CheckFirst', '/tprm-software' => 'TPRM software', '/pricing' => 'Pricing', '/contact' => 'Book a demo') as $url => $label) {
        echo '<a href="' . esc_url($url) . '">' . esc_html($label) . '</a>';
    }
    echo '</nav>';
});

// The static exporter writes query-string assets under hashed filenames without
// rewriting their HTML references. Stable local asset paths keep CSS/JS reachable.
foreach (array('style_loader_src', 'script_loader_src') as $hook) {
    add_filter($hook, function ($url) {
        $asset_path = wp_parse_url($url, PHP_URL_PATH);
        if (is_string($asset_path) && strpos($asset_path, '/blog/wp-content/') === 0) {
            return remove_query_arg('ver', $url);
        }
        return $url;
    }, 100);
}
