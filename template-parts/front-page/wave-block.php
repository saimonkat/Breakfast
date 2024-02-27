<?php
$text_field = get_field('wave_messaging');
$text = $text_field['text']
?>
<section class="home__wave-block">

	<div class="home__wave">

		<div class="home__wave__wrapper">
			<?php get_template_part('template-parts/waves/home-wave'); ?>
		</div>

		<div class="home__wave__content">
			<?= $text; ?>
		</div>

	</div>

	<a href="<?php echo site_url('/contact/') ?>" class="home__middle__sticker">
		<img src="<?= DIST_URI . '/images/hungry-for-more-sticker.png'; ?>" alt="" class="sticker">
	</a>

</section>