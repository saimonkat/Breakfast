<?php
$baconophone = get_field('baconophone');
?>
<section class="home__middle">

	<?php get_template_part('template-parts/front-page/wave-block'); ?>

	<div class="home__middle__copy">
		<?= $baconophone['copy'] ?>
	</div>

	<div class="home__middle__collage--baconophone">

		<div class="collage-baconophone">

			<figure class="collage-baconophone__media collage-baconophone__media--bacon">
				<?= wp_get_attachment_image($baconophone['bacon'], $size, false, ["class" => "collage-baconophone__media__image"]); ?>
			</figure>

			<figure class="collage-baconophone__media collage-baconophone__media--hands">
				<?= wp_get_attachment_image($baconophone['hands'], $size, false, ["class" => "collage-baconophone__media__image"]); ?>
			</figure>

		</div>

	</div>

</section>