<?php 
/**
	* The template for displaying 404 pages (not found)
	*
	* @link https://codex.wordpress.org/Creating_an_Error_404_Page
	*/
	$background = get_field('404_graphic', 'options');
	get_header();
?>

<div class="page page__error-404">

	<section class="e-404">
		<div class="e-404__background">
			<?= wp_get_attachment_image($background, 'full', false, ["class" => "e-404__background__image"]); ?>
		</div>
		<div class="e-404__content">
			<h1 class="e-404__heading">404</h1>
			<p class="e-404__text">Oops the page you're looking for does not exist</p>
			<p class="e-404__text">Please return to the <a class="e-404__link"
					href="<?= esc_url(home_url('/')); ?>">homepage</a>
			</p>
		</div>
	</section><!-- .error-404 -->

</div><!-- .page__error-404 -->

<?php get_footer(); ?>