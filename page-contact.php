<?php
/* Template Name: Contact */
get_header();
?>

<div class="page page__contact">

	<?php 
		get_template_part('template-parts/contact/intro-block');
		get_template_part('template-parts/contact/wave-block');
		get_template_part('template-parts/contact/collage-block');
	?>

</div>

<?php get_footer(); ?>