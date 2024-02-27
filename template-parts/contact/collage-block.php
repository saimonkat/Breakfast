<?php
$cta = get_field('cta');
$collage = get_field('collage');
?>
<section class="contact__collage-block">

	<div class="contact__collage__cta">

		<?php get_template_part('template-parts/shared/call-to-action'); ?>

	</div>

	<div class="collage__fruit">

		<figure class="collage__fruit__media collage__fruit__media--cherries-1" data-speed="1.3">
			<?= wp_get_attachment_image($collage['cherries_1'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

		<figure class="collage__fruit__media collage__fruit__media--cherries-2" data-speed="0.7">
			<?= wp_get_attachment_image($collage['cherries_2'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

		<figure class="collage__fruit__media collage__fruit__media--banana" data-speed="0.9">
			<?= wp_get_attachment_image($collage['banana'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

		<figure class="collage__fruit__media collage__fruit__media--counter" data-speed="0.9">
			<?= wp_get_attachment_image($collage['counter'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

		<figure class="collage__fruit__media collage__fruit__media--segment-1" data-speed="1.3">
			<?= wp_get_attachment_image($collage['segment_1'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

		<figure class="collage__fruit__media collage__fruit__media--segment-2" data-speed="1.3">
			<?= wp_get_attachment_image($collage['segment_2'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

		<figure class="collage__fruit__media collage__fruit__media--segment-3" data-speed="1.3">
			<?= wp_get_attachment_image($collage['segment_3'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

		<figure class="collage__fruit__media collage__fruit__media--segment-4" data-speed="1.3">
			<?= wp_get_attachment_image($collage['segment_4'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

		<figure class="collage__fruit__media collage__fruit__media--segment-5" data-speed="1.3">
			<?= wp_get_attachment_image($collage['segment_5'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

		<figure class="collage__fruit__media collage__fruit__media--segment-6" data-speed="0.7">
			<?= wp_get_attachment_image($collage['segment_6'], $size, false, ["class" => "collage__fruit__image"]); ?>
		</figure>

	</div>

	<div class="contact__social-block">

		<div class="contact__social-block__ticker">
			<?php
			get_template_part('template-parts/shared/ticker', null, array(
				'data' => array(
					'group-field' => 'social_block',
					'ticker-field' => 'ticker_1',
                    'type' => 'horizontal',
                    'direction' => 'left',
                    'speed' => '1'
				)
			)); ?>
		</div>

		<?php get_template_part('template-parts/shared/instagram'); ?>

		<div class="contact__social-block__ticker">
			<?php
			get_template_part('template-parts/shared/ticker', null, array(
				'data' => array(
					'group-field' => 'social_block',
					'ticker-field' => 'ticker_2',
                    'type' => 'horizontal',
                    'direction' => 'left',
                    'speed' => '1'
				)
			)); ?>
		</div>

		<?php get_template_part('template-parts/shared/follow-us'); ?>

	</div>

</section>