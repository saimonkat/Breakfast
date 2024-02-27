<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the .content-area, .site-content and .site divs and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */
$footer = get_field('footer', 'options');
?>

</main> <!-- .content-area -->

<footer id="site-footer" class="footer">
	<div class="footer__main">

		<a href="<?= esc_url(home_url('/')); ?>" class="footer__logo">
			<svg class="footer__logo__svg" width="136" height="176">
				<use xlink:href="<?= get_theme_file_uri() . '/assets/dist/images/icons/svg-sprite.svg#breakfast_icon_W' ?>">
				</use>
			</svg>
		</a>

		<?php
		$args = array(
			'theme_location' => 'footer-menu',
			'container' => 'footer__nav',
			'menu_class' => 'footer__nav__items',
			'add_li_class' => 'footer__nav__item',
			'menu_id' => 'footerNavItems'
		);
		wp_nav_menu($args);
		?>

		<div class="footer__blocks">

			<div class="footer__block footer__block--1">
				<div class="footer__block__heading">
					<?= $footer['address_heading'] ?>
				</div>
				<div class="footer__block__content">
					<?= $footer['address'] ?>
				</div>
			</div>

			<div class="footer__block footer__block--2">
				<div class="footer__block__heading">
					<?= $footer['contact_heading'] ?>
				</div>
				<div class="footer__block__content">
					<a class="footer__block__content footer__block__content--email"
						href="<?= "mailto:" . antispambot(acf_esc_html($footer['contact_email']),1); ?>"><?= acf_esc_html($footer['contact_email']); ?></a>
				</div>
			</div>

			<div class="footer__block footer__block--3">
				<div class="footer__block__heading">
					<?= $footer['social_heading'] ?>
				</div>
				<div class="footer__block__content">

					<div class="footer__social__links">
						<?php
					$footer_socials = $footer['social_links'];

					foreach ($footer_socials as $social_links) :
						$link_text = $social_links['social_link'];
						$link_icon = $social_links['social_icon'];
					?>
						<a class="footer__social__link" href="<?= $link_text; ?>"><?= $link_icon; ?></a>
						<?php
					endforeach;
					?>
					</div>


				</div>
			</div>
		</div>



	</div>



	<div class="footer__bottom">
		<div class="footer__copyright">
			<p>©<?= date('Y'); ?> BREAKFAST. All rights reserved.</p>
			<p>No part of this website may be reproduced without permission.</p>
		</div>

		<div class="footer__credits">
			<a class="footer__credits__link" href="https://www.wearestudio315.com/">Design & Branding <span>Studio
					315</span></a>
			<a class="footer__credits__link" href="https://www.thousand-lines.com/">Development <span>Thousand
					Lines</span></a>
		</div>
	</div>

	<div class="footer__hidden">
		<?php get_template_part('template-parts/shared/instagram'); ?>
	</div>

</footer>

</div> <!-- .site-content -->

</div> <!-- .site -->

<div class="transition-over">
	<div class="transition-over__inner"></div>
</div>

<?php wp_footer(); ?>

</body>

</html>