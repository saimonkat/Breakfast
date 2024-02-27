<?php
require 'app/template-functions.php';

define('DIST_URI', get_template_directory_uri() . '/assets/dist');

if ( ! function_exists('theme_setup')) :
	function theme_setup()
	{
			add_theme_support('title-tag');
			add_theme_support('post-thumbnails');

			register_nav_menus(
					array(
							'header-menu' => esc_html__('Header', 'theme'),
							'footer-menu' => esc_html__('Footer', 'theme'),
					)
			);

			add_theme_support(
					'html5',
					array(
							'gallery',
							'style',
							'script',
					)
			);
	}
endif;
add_action('after_setup_theme', 'theme_setup');

function enqueue_theme_style_scripts()
{
    wp_enqueue_style('styles', get_template_directory_uri() . '/assets/dist/css/style.min.css');
    wp_enqueue_script('scripts', get_template_directory_uri() . '/assets/dist/js/main.bundle.js', array('jquery'), '1.0', true);

//	wp_deregister_script('jquery');

    // wp_localize_script('scripts', 'theme_name', [
    //    'ajax_url' => admin_url('admin-ajax.php')
    // ]);
}

add_action('wp_enqueue_scripts', 'enqueue_theme_style_scripts');

require get_template_directory() . '/app/Autoloader.php';

// FACILITATES BEING ABLE TO ADD CSS CLASSES TO LI ITEMS WHEN INTEGRATING NAV MENU WITH WP

function add_additional_class_on_li($classes, $item, $args) {
	if(isset($args->add_li_class)) {
			$classes[] = $args->add_li_class;
	}
	return $classes;
}

add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);


  
  
// add_filter( 'aioseo_post_metabox_priority', 'aioseo_filter_metabox_priority' );

// function aioseo_filter_metabox_priority( $priority) {
// 	return 'low';
// }

add_action( 'after_setup_theme', 'custom_image_sizes' );

function custom_image_sizes() {
        add_image_size( 'xs-300', 300, 9999 ); // 300px wide unlimited height
        add_image_size( 'sm-600', 600, 9999 ); // 450px wide unlimited height
        add_image_size( 'md-900', 900, 9999 ); // 1200px wide unlimited height
        add_image_size( 'lg-1200', 1200, 9999 ); // 2000px wide unlimited height
        add_image_size( 'xl-1800', 1800, 9999 ); // 3000px wide unlimited height
        add_image_size( 'xxl-2400', 2400, 9999 ); // 3000px wide unlimited height
        add_image_size( 'portfolio_full', 9999, 900 ); // 900px tall unlimited width
}

add_filter( 'custom_image_size_names', 'custom_image_sizes_names' );

function custom_image_sizes_names( $sizes ) {
    return array_merge( $sizes, array(
        'xs-300' => __( 'Extra Small' ),
        'sm-600' => __( 'Small' ),
        'md-900' => __( 'Medium' ),
        'lg-1200' => __( 'Large' ),
        'xl-1800' => __( 'Extra Large' ),
        'xxl-2400' => __( '2x Extra Large' ),
        'portfolio_full' => __( 'Portfolio Full Size' ),
    ) );
}

add_filter('big_image_size_threshold', '__return_false');