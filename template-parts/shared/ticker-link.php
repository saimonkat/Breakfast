<?php if ($args['data']['group-field']) {
    $arg_group = $args['data']['group-field'];
    $arg_ticker = $args['data']['ticker-field'];
    $group = get_field($arg_group);
    $field = $group["{$arg_ticker}"];
    $type = $args['data']['type'];
    $direction = $args['data']['direction'];
    $speed = $args['data']['speed'];
} ?>
<div class="ticker-slider__wrapper ticker-slider__wrapper--<?= $type ?>">
	<div class="ticker-slider ticker-slider--<?= $type ?>" data-direction="<?= $direction ?>" data-speed="<?= $speed ?>">
		<div class="ticker-slider__group ticker-slider__group--<?= $type ?>">
			<?php foreach ($field as $data) :
								$link_item = $data['link'];
			$link_item_url = $link_item['url'];
			$link_item_title = $link_item['title'];
			$link_item_target = $link_item['target'] ? $link_item['target'] : '_self';
								?>

			<div class="ticker-slider__item ticker-slider__item--<?= $type ?>">
				<span class="ticker-slider__text ticker-slider__text--<?= $type ?>">
					<a href="<?= $link_item_url; ?>" target="<?= $link_item_target; ?>">
						<?= $link_item_title; ?>
					</a>
				</span>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</div>