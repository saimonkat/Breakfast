<?php
	$hero_collage = get_field('hero_collage');
	$size = 'full';
?>
<section class="home__hero">
	<div class="collage-hero">
		<figure class="collage-hero__media collage-hero__media--sky">
			<img src="<?= wp_get_attachment_image_url($hero_collage['sky'], $size, false) ?>" alt=""
				class="collage-hero__media__image">
		</figure>

		<figure class="collage-hero__media collage-hero__media--egg-balloon">
			<?= wp_get_attachment_image($hero_collage['egg_balloon'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--logo">
			<?= wp_get_attachment_image($hero_collage['logo'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--logo-egg">
			<?= wp_get_attachment_image($hero_collage['logo_egg'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--mountains">
			<?= wp_get_attachment_image($hero_collage['mountains'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--sign-light">
			<?= wp_get_attachment_image($hero_collage['sign_light'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--sign">
			<?= wp_get_attachment_image($hero_collage['sign'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--switch">
			<?= wp_get_attachment_image($hero_collage['switch'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--raspberry-1">
			<?= wp_get_attachment_image($hero_collage['raspberry_1'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--raspberry-2">
			<?= wp_get_attachment_image($hero_collage['raspberry_2'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--raspberry-3">
			<?= wp_get_attachment_image($hero_collage['raspberry_3'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--egg">
			<?= wp_get_attachment_image($hero_collage['egg'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--dial">
			<?= wp_get_attachment_image($hero_collage['dial'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--tape">
			<?= wp_get_attachment_image($hero_collage['tape'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>

		<figure class="collage-hero__media collage-hero__media--reflection">
			<?= wp_get_attachment_image($hero_collage['reflection'], $size, false, ["class" => "collage-hero__media__image"]); ?>
		</figure>
	</div>
</section>