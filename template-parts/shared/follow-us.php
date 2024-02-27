<?php 
$footer = get_field('footer', 'options');
$footer_heading_field = $footer['follow_us_heading']; 
$footer_heading_title = $footer_heading_field['title'];
$footer_heading_url = $footer_heading_field['url'];
$footer_heading_target = $footer_heading_field['target'] ? $footer_heading_field['target'] : '_self';
?>

<div class="follow-us">

	<a class="follow-us__heading" href="<?= esc_url($footer_heading_url); ?>"
		target="<?= esc_attr($footer_heading_target); ?>">
		<?= $footer_heading_title; ?>
	</a>

	<div class="follow-us__links">

		<?php
		$footer_socials = $footer['social_links'];

		foreach ($footer_socials as $social_links) :
			$link_text = $social_links['social_link'];
			$link_icon = $social_links['social_icon'];
			$logo_string = "/assets/dist/images/icons/svg-sprite.svg#{$link_icon}-logo";
		?>
		<a class="follow-us__link" href="<?= $link_text; ?>" target="_blank">
			<span class="follow-us__link__icon">
				<svg class="follow-us__link__icon__svg">
					<use xlink:href="<?= get_theme_file_uri() . $logo_string; ?>">
					</use>
				</svg>
			</span>

		</a>

		<?php endforeach; ?>

	</div>

</div>