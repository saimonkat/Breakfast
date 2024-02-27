<div class="animated-text__container">

	<?php
	$arg_group  = $args['data']['group-field'];

	$anim_group = get_field($arg_group);
	// $anim_text  = $anim_group["text"];
	$anim_count = $anim_group["count"];
	$anim_type  = $anim_group["animation"];
	$anim_bg    = $anim_group["bg_color"];
	$link_item = $anim_group['link'];
	$link_item_url = $link_item['url'];
	$link_item_title = $link_item['title'];
	$link_item_target = $link_item['target'] ? $link_item['target'] : '_self';
	?>

	<div class="animated-text" data-anim="<?= $anim_type; ?>">
		<?php for ($i = 0; $i < $anim_count; $i++) : ?>

		<a <?php if ($anim_type == 'regular') echo 'style="background:' . $anim_bg . '"'; ?> href="<?= $link_item_url; ?>"
			target="<?= $link_item_target; ?>">
			<?= $link_item_title; ?>
		</a>

		<?php endfor; ?>
	</div>
</div>