<?php
$cta = get_field('call_to_action');
?>

<div class="cta">
	<div class="cta__heading">
		<?= $cta['heading']; ?>
	</div>

	<div class="cta__email">
		<a href="<?= "mailto:" . antispambot(acf_esc_html($cta['email']),1); ?>">
			<?= acf_esc_html($cta['email']); ?>
		</a>
	</div>
</div>