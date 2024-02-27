<?php
$about = get_field('about');
$graphics = get_field('graphics');
?>
<section class="about__wrapper" style="background-image: url(<?= $graphics['background']; ?>);">

	<div class="about__content">

		<div class="about__content__heading">
			<?= $about['heading'] ?>
		</div>

		<div class="about__content__copy">
			<?= $about['copy'] ?>
		</div>

		<figure class="about__content__spoon" data-speed="0.8">
			<?= wp_get_attachment_image($graphics['spoon'], $size, false, ["class" => "about__content__spoon__image"]); ?>
		</figure>
	</div>

</section>