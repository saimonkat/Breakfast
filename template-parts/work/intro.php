<?php
$text_field = get_field('animated_text');
$text = $text_field['text']
?>
<section class="work__text-scroll">

	<?php get_template_part('template-parts/shared/animated-text', null, array(
		'data' => array(
			'group-field' => 'animated_text',
		)
	)); ?>

</section>