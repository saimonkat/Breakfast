<?php

	class ProjectController {
		public function __construct() {
			add_action( 'init', [ $this, 'register_post_type' ] );
		}

		public function register_post_type(): void {
			$labels_work = array(
				'name'                  => _x( 'Work', 'Post Type General Name' ),
				'singular_name'         => _x( 'Work', 'Post Type Singular Name' ),
				'menu_name'             => _x( 'Work', 'Admin Menu text' ),
				'name_admin_bar'        => _x( 'Work', 'Add New on Toolbar' ),
				'archives'              => __( 'Work Archives' ),
				'attributes'            => __( 'Work Attributes' ),
				'parent_item_colon'     => __( 'Parent Work:' ),
				'all_items'             => __( 'All Work' ),
				'add_new_item'          => __( 'Add New Work' ),
				'add_new'               => __( 'Add New' ),
				'new_item'              => __( 'New Work' ),
				'edit_item'             => __( 'Edit Work' ),
				'update_item'           => __( 'Update Work' ),
				'view_item'             => __( 'View Work' ),
				'view_items'            => __( 'View Work' ),
				'search_items'          => __( 'Search Work' ),
				'not_found'             => __( 'Not found' ),
				'not_found_in_trash'    => __( 'Not found in Trash' ),
				'featured_image'        => __( 'Featured Image' ),
				'set_featured_image'    => __( 'Set featured image' ),
				'remove_featured_image' => __( 'Remove featured image' ),
				'use_featured_image'    => __( 'Use as featured image' ),
				'insert_into_item'      => __( 'Insert into Work' ),
				'uploaded_to_this_item' => __( 'Uploaded to this Work' ),
				'items_list'            => __( 'Work list' ),
				'items_list_navigation' => __( 'Work list navigation' ),
				'filter_items_list'     => __( 'Filter Work list' ),
			);
			$args_work    = array(
				'label'        => 'Credits',
				'labels'       => $labels_work,
				'public'       => true,
				'hierarchical' => false,
				'show_in_rest' => true,
				'supports'     => [ 'title', 'thumbnail' ],
				'has_archive'  => true,
				'rewrite'      => array( 'slug' => 'work' ),
				'query_var'    => true,
				'menu_icon'    => 'dashicons-megaphone'
			);
			register_post_type( 'Credit', $args_work );
		}
	}

	new ProjectController();