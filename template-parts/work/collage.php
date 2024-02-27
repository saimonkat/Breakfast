<?php
$collage = get_field('collage');
?>
<section class="work__collage-block">

	<div class="collage__egg-rise">
		<!-- data-speed="1.4" -->
		<figure class="collage__egg-rise__media collage__egg-rise__media--egg">
			<?= wp_get_attachment_image($collage['eggrise'], $size, false, ["class" => "collage__egg-rise__media__image"]); ?>
		</figure>

		<figure class="collage__egg-rise__media collage__egg-rise__media--mountains">
			<?= wp_get_attachment_image($collage['mountains'], $size, false, ["class" => "collage__egg-rise__media__image"]); ?>
		</figure>

		<figure class="collage__egg-rise__media collage__egg-rise__media--highway">
			<?= wp_get_attachment_image($collage['highway'], $size, false, ["class" => "collage__egg-rise__media__image"]); ?>
		</figure>

	</div>

</section>