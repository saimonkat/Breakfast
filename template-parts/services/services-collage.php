<?php
$collage = get_field('collage');
?>
<section class="services__collage-block">

	<div class="collage__egg-loops">

		<figure class="collage__egg-loops__media collage__egg-loops__media--tablecloth">
			<?= wp_get_attachment_image($collage['background'], $size, false, ["class" => "collage__egg-loops__media__image"]); ?>
		</figure>

		<figure class="collage__egg-loops__media collage__egg-loops__media--egg-cup">
			<?= wp_get_attachment_image($collage['egg_cup'], $size, false, ["class" => "collage__egg-loops__media__image"]); ?>

			<a href="<?php echo site_url('/contact/') ?>" class="collage__egg-loops__sticker">
				<img src="<?= DIST_URI . '/images/hungry-for-more-sticker.png'; ?>" alt="" class="sticker">
			</a>
		</figure>

		<figure class="collage__egg-loops__media collage__egg-loops__media--egg-shell">
			<?= wp_get_attachment_image($collage['egg_shell'], $size, false, ["class" => "collage__egg-loops__media__image"]); ?>
		</figure>

		<figure class="collage__egg-loops__media collage__egg-loops__media--fruit-loops">
			<?= wp_get_attachment_image($collage['fruit_loops'], $size, false, ["class" => "collage__egg-loops__media__image"]); ?>
		</figure>

		<figure class="collage__egg-loops__media collage__egg-loops__media--green-loop">
			<?= wp_get_attachment_image($collage['green_loop'], $size, false, ["class" => "collage__egg-loops__media__image"]); ?>
		</figure>

		<figure class="collage__egg-loops__media collage__egg-loops__media--yellow-loop">
			<?= wp_get_attachment_image($collage['yellow_loop'], $size, false, ["class" => "collage__egg-loops__media__image"]); ?>
		</figure>

		<figure class="collage__egg-loops__media collage__egg-loops__media--pink-loop">
			<?= wp_get_attachment_image($collage['pink_loop'], $size, false, ["class" => "collage__egg-loops__media__image"]); ?>
		</figure>

		<figure class="collage__egg-loops__media collage__egg-loops__media--purple-loop">
			<?= wp_get_attachment_image($collage['purple_loop'], $size, false, ["class" => "collage__egg-loops__media__image"]); ?>
		</figure>

		<figure class="collage__egg-loops__media collage__egg-loops__media--blue-loop">
			<?= wp_get_attachment_image($collage['blue_loop'], $size, false, ["class" => "collage__egg-loops__media__image"]); ?>
		</figure>

	</div>

</section>