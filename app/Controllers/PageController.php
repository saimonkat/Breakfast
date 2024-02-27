<?php

	namespace App\Controllers;

	class PageController
	{
		public function __construct()
		{
			add_filter('body_class', [$this, 'removeBodyClasses']);
		}

		public function removeBodyClasses($classes): array
		{
			if (is_front_page()) {
				return ['home'];
			}

			if (is_page('about')) {
				$classes[] = 'about';
			}

			if (is_page('services')) {
				$classes[] = 'services';
			}

			if (is_page('contact')) {
				$classes[] = 'contact';
			}

			if (is_page('latest-work')) {
				$classes[] = 'latest-work';
			}

			return $classes;
		}
	}

	new PageController();