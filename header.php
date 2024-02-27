<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, height=device-height initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="developed" content="Development by Thousand Lines">

	<link rel="apple-touch-icon" sizes="180x180" href="<?= DIST_URI . '/images/favicon/apple-touch-icon.png' ?>">
	<link rel="icon" type="image/png" sizes="32x32" href="<?= DIST_URI . '/images/favicon/favicon-32x32.png' ?>">
	<link rel="icon" type="image/png" sizes="16x16" href="<?= DIST_URI . '/images/favicon/favicon-16x16.png' ?>">
	<link rel="manifest" href="<?= DIST_URI . '/images/favicon/site.webmanifest' ?>">
	<link rel="mask-icon" href="<?= DIST_URI . '/images/favicon/safari-pinned-tab.svg'  ?>" color="#96d9f6">
	<meta name="apple-mobile-web-app-title" content="Breakfast">
	<meta name="application-name" content="Breakfast">
	<meta name="msapplication-TileColor" content="#2d89ef">
	<meta name="msapplication-config" content="<?= DIST_URI . '/images/favicon/browserconfig.xml' ?>">
	<meta name="theme-color" content="#ffffff">

	<!-- Example of preloading a font -->
	<link rel="preload" href="<?= DIST_URI . '/fonts/Equip-Medium/Equip-Medium.woff2' ?>" as="font" type="font/woff2"
		crossorigin="anonymous">

	<?php wp_head(); ?>

</head>

<body <?php body_class(is_home() ? 'home' : ''); ?> data-barba="wrapper">

	<div class="site" id="page">

		<div class="site-content" id="content" data-barba="container" data-barba-namespace="home">

			<a class="skip-link screen-reader-text" href="#primary">
				<?php esc_html('Skip to content'); ?>
			</a>

			<header id="site-header" class="header">

				<a class="header__logo <?php if(is_front_page()) { echo "header__logo--home"; }; ?> "
					href="<?= esc_url(home_url('/')); ?>">

					<svg class="header__logo__svg" width="136" height="176">
						<use xlink:href="<?= get_theme_file_uri() . '/assets/dist/images/icons/svg-sprite.svg#breakfast_icon_W' ?>">
						</use>
					</svg>

				</a>

				<?php 
          $args = array(
          'theme_location' => 'header-menu',
          'container' => 'nav',
					'container_class' => 'header__nav',
          'menu_class' => 'header__nav__items',
          'add_li_class' => 'header__nav__item',
          'menu_id' => 'headerNavItems'
          );
          wp_nav_menu($args);
        ?>

				<button class="header__menu-button menu-button " role="button" id="headerNavButton">
					<div class="header__menu-button__icon">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>

				<div class="menu">

					<a class="menu__logo" href="<?= esc_url(home_url('/')); ?>">

						<svg class="menu__logo__svg" width="136" height="176">
							<use
								xlink:href="<?= get_theme_file_uri() . '/assets/dist/images/icons/svg-sprite.svg#breakfast_icon_W' ?>">
							</use>
						</svg>

					</a>

					<?php 
          $args = array(
          'theme_location' => 'header-menu',
          'container' => 'nav',
					'container_class' => 'menu__nav',
          'menu_class' => 'menu__nav__items',
          'add_li_class' => 'menu__nav__item',
          'menu_id' => 'menuNavItems'
          );
          wp_nav_menu($args);
        ?>

					<button class="menu__menu-button menu-button " role="button" id="menuNavButton">
						<div class="menu__menu-button__icon">
							<span></span>
							<span></span>
						</div>
					</button>

					<figure class="menu__graphic__media">
						<?= wp_get_attachment_image(get_field('menu_graphic', 'options'), "full", false, ["class" => "menu__graphic__media__image"]); ?>
					</figure>

				</div>

			</header>

			<?php wp_body_open(); ?>

			<main class="content-area" id="primary">