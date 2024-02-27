<?php
/* Template Name: Work */
get_header();
?>

<div class="page page__work">

	<?php 
	get_template_part('template-parts/work/intro');
	  get_template_part('template-parts/work/wave-block');
		get_template_part('template-parts/work/work-latest');
		get_template_part('template-parts/work/banner');
		get_template_part('template-parts/work/work-full');
		get_template_part('template-parts/work/collage');
	?>

</div>

<?php get_footer(); ?>