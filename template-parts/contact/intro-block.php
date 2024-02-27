<?php
$text_field = get_field('animated_text');
$text = $text_field['text']
?>
<section class="contact__text-scroll">

	<?php get_template_part('template-parts/shared/ticker', null, array(
		'data' => array(
			'group-field' => 'animated_text',
			'ticker-field' => 'ticker',
            'type' => 'vertical',
            'direction' => 'up',
            'speed' => '0.7'
		)
	)); ?>

</section>