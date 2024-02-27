<?php
$text_field = get_field('wave_messaging');
$text = $text_field['text']
?>
<section class="contact__wave-block">

	<div class="contact__wave">

		<div class="contact__wave__wrapper">
			<?php get_template_part('template-parts/waves/contact-wave'); ?>
		</div>

		<div class="contact__wave__content">
			<?= $text; ?>
		</div>

	</div>

</section>