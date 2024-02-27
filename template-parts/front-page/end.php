<?php
	$latest_work = get_field( 'latest_work' );
?>
	<section class="home__work">

		<div class="home__text__scroll">
			<?php get_template_part( 'template-parts/shared/animated-text', null, array(
				'data' => array(
					'group-field'  => 'animated_text',
				)
			) ); ?>
		</div>


		<div class="home__work__collage--rose-hand">

			<div class="collage-rose-hand">

				<figure class="collage-rose-hand__media collage-rose-hand__media--rose">
					<?= wp_get_attachment_image( $latest_work['rose'], $size, false, [ "class" => "collage-rose-hand__media__image" ] ); ?>
				</figure>

				<figure class="collage-rose-hand__media collage-rose-hand__media--hand">
					<?= wp_get_attachment_image( $latest_work['hand'], $size, false, [ "class" => "collage-rose-hand__media__image" ] ); ?>
				</figure>

			</div>

		</div>

		<div class="home__work__copy">
			<?= $latest_work['copy'] ?>
		</div>

		<div class="services__latest-work">
			<div class="services__latest-work__ticker">
				<?php
					get_template_part( 'template-parts/shared/ticker', null, array(
						'data' => array(
							'group-field'  => 'latest_work',
							'ticker-field' => 'ticker_1',
                            'type' => 'horizontal',
                            'direction' => 'left',
                            'speed' => '1'
						)
					) );
				?>
			</div>

			<div class="services__work-highlights">
				<?php get_template_part( 'template-parts/shared/slider-work', null, array(
					'data' => array(
						'group-field' => 'latest_work',
						'work-field'  => 'highlights'
					)
				) ); ?>
			</div>

			<div class="services__latest-work__ticker">
				<?php
					get_template_part( 'template-parts/shared/ticker', null, array(
						'data' => array(
							'group-field'  => 'latest_work',
							'ticker-field' => 'ticker_2',
                            'type' => 'horizontal',
                            'direction' => 'left',
                            'speed' => '1'
						)
					) );
				?>
			</div>
		</div>

	</section>

<?php get_template_part( 'template-parts/front-page/collage-diver' ); ?>