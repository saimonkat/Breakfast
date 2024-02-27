<div class="work-slider__wrapper">

	<?php if ($args['data']['group-field']) {
		$arg_group = $args['data']['group-field'];
		$arg_work = $args['data']['work-field'];

		$work_group = get_field($arg_group);
		$work_field = $work_group["{$arg_work}"];
	} ?>

	<div class="swiper work-slider">
		<div class="swiper-wrapper work-slider__slide-wrapper">
			<?php
			// Access Latest Work highlights rows
			foreach ($work_field as $work_data) :
			?>

			<div class="swiper-slide work-slider__slide">

				<?php
					// Access work post object
					foreach ($work_data as $post) :
						setup_postdata($post);
						// Access fields within post object
						$work = get_field('work');
						$work_media = $work['media'];
						$work_id_lowercase = strtolower($work['title']);
                        $work_id = preg_replace('/\|/', ' ', $work_id_lowercase);
                        $work_id = preg_replace('/\s+/', '_', $work_id);
						$size = "full";
					?>
				<a href="/latest-work#<?= $work_id; ?>" target="_self">

					<?php if ($work_media['poster']) { ?>
					<?= wp_get_attachment_image($work_media['poster'], $size, false, ["class" => "work-slider__image"]); ?>
					<?php } else { ?>
					<img srcset="
                        https://vumbnail.com/<?= $work_media['vimeo_link']; ?>.jpg 640w, 
                        https://vumbnail.com/<?= $work_media['vimeo_link']; ?>_large.jpg 640w, 
                        https://vumbnail.com/<?= $work_media['vimeo_link']; ?>_medium.jpg 200w, 
                        https://vumbnail.com/<?= $work_media['vimeo_link']; ?>_small.jpg 100w"
                        sizes="(max-width: 640px) 100vw, 640px"
                        src="https://vumbnail.com/<?= $work_media['vimeo_link']; ?>.jpg"
						alt="Vimeo Thumbnail"
                        class="work-slider__image visible" />
					<?php } ?>

				</a>

				<?php
					endforeach;
					wp_reset_postdata();
					?>
			</div>

			<?php
			endforeach;
			?>
		</div>

	</div>
</div>