<?php
$banner = get_field('banner');
$track = $banner['track'];
?>
<section class="work__banner-block">

	<div class="work__banner">

		<figure class="work__banner__media work__banner__media--background">
			<?= wp_get_attachment_image($banner['background'], $size, false, ["class" => "work__banner__media__image"]); ?>
		</figure>

		<figure class="work__banner__media work__banner__media--vinyl">
			<?= wp_get_attachment_image($banner['vinyl'], $size, false, ["class" => "work__banner__media__image"]); ?>
		</figure>

		<figure class="work__banner__media work__banner__media--arm">
			<?= wp_get_attachment_image($banner['arm'], $size, false, ["class" => "work__banner__media__image"]); ?>
		</figure>

	</div>

	<audio autoplay muted playsinline='' class="work__banner__audio" src="<?= $track['url']; ?>"
		type="<?= $track['mime_type']; ?>"></audio>

</section>