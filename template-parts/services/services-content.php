<?php
$intro = get_field('intro');
$services = get_field('services');
?>
<section class="services__content">

	<div class="services__body">
		<div class="services__intro__heading">
			<?= $intro['heading'] ?>
		</div>

		<div class="services__intro__copy">
			<?= $intro['copy'] ?>
		</div>

		<ul class="services__service-list">
			<?php
			$service_list = $services['service_list'];
			$count = 1;
			
			foreach ($service_list as $key => $service) :
				$service_name = $service['name'];
				$service_image = $service['image'];
				$size = "sm-600";
			?>

			<li href="" class="service-list__service">
				<span class="service-list__service__name">
					<?= $service_name; ?>
				</span>
				<?= wp_get_attachment_image($service_image, $size, false, ["class" => "service-list__service__image service-list__service__image--{$count}"]); ?>
			</li>

			<?php
		$count++;
			endforeach;
			?>
		</ul>

		<div class="services__cta">
			<?php get_template_part('template-parts/shared/call-to-action'); ?>
		</div>
	</div>

	<div class="services__latest-work">
		<div class="services__latest-work__ticker">
			<?php
			get_template_part('template-parts/shared/ticker', null, array(
				'data' => array(
					'group-field' => 'latest_work',
					'ticker-field' => 'ticker_1',
                    'type' => 'horizontal',
                    'direction' => 'left',
                    'speed' => '1'
				)
			));
			?>
		</div>

		<div class="services__work-highlights">
			<?php get_template_part('template-parts/shared/slider-work', null, array(
			'data' => array(
				'group-field' => 'latest_work',
				'work-field' => 'highlights'
			)
		)); ?>
		</div>

		<div class="services__latest-work__ticker">
			<?php
			get_template_part('template-parts/shared/ticker', null, array(
				'data' => array(
					'group-field' => 'latest_work',
					'ticker-field' => 'ticker_2',
                    'type' => 'horizontal',
                    'direction' => 'left',
                    'speed' => '1'
				)
			));
			?>
		</div>
	</div>

</section>