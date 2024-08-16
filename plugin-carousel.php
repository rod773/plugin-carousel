<?php
/*
Plugin Name: Plugin Carousel
Plugin URI: 
Description: 
Version: 
Author: Rodrigo
Author URI: 
License: 
License URI: 
*/




function load_bootstrap(){
    
   $path = plugin_dir_url( __FILE__ );


    wp_enqueue_style('slider_css', $path . 'style.css', date("h:i:s"));


    wp_enqueue_script('bootstrap_js', $path. 'script.js', [], date("h:i:s"), true);


   
}


add_action('wp_footer','load_bootstrap');