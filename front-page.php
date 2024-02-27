<?php
/* Template Name: Home */
get_header();
?>

<div class="page page__home">
    <div class="home__preloader"></div>

	<div class="home__hero-wrapper">
		<?php get_template_part('template-parts/front-page/hero'); ?>
	</div>

	<div class="home__middle-wrapper">
		<?php get_template_part('template-parts/front-page/middle'); ?>
	</div>

	<div class="home__end-wrapper">
		<?php get_template_part('template-parts/front-page/end'); ?>
	</div>

</div>

<?php get_footer(); ?>