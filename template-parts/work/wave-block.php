<?php
$text_field = get_field('wave_messaging');
$text = $text_field['text']
?>
<section class="work__wave-block">

	<div class="work__wave">

		<div class="work__wave__wrapper">
			<?php get_template_part('template-parts/waves/work-wave'); ?>
		</div>

		<div class="work__wave__content">
			<?= $text; ?>
		</div>

		<div class="work__wave__mobile-sticker">
			<img src="<?= DIST_URI . '/images/play-it-loud-sticker.png'; ?>" alt="" class="sticker">
		</div>

	</div>

</section>