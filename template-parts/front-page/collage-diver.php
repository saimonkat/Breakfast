<?php
$collage = get_field('collage');
?>
<section class="work__collage-diver">

	<div class="home__text__scroll home__text__scroll--diver">
		<?php get_template_part('template-parts/shared/animated-text', null, array(
			'data' => array(
				'group-field'  => 'animated_text_2',
			)
		)); ?>
	</div>

	<div class="collage-diver">

		<figure class="collage-diver__media collage-diver__media--diver">
			<?= wp_get_attachment_image($collage['diver'], $size, false, ["class" => "collage-diver__media__image"]); ?>
		</figure>

		<figure class="collage-diver__media collage-diver__media--hand-mug">
			<?= wp_get_attachment_image($collage['hand_mug'], $size, false, ["class" => "collage-diver__media__image"]); ?>
		</figure>

		<figure class="collage-diver__media collage-diver__media--mug-front">
			<?= wp_get_attachment_image($collage['mug_front'], $size, false, ["class" => "collage-diver__media__image"]); ?>
		</figure>

		<figure class="collage-diver__media collage-diver__media--hollywood">
			<?= wp_get_attachment_image($collage['hollywood'], $size, false, ["class" => "collage-diver__media__image"]); ?>
		</figure>

	</div>

</section>