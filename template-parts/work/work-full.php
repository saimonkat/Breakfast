<?php
$work_spots_field = get_field('work_spots');
$work_spots_group = $work_spots_field["list"];
?>
<section class="work__work-full-list">
	<div class="work__full-list__wrapper">
		<?php
	// Access Latest Work spots rows
	foreach ($work_spots_group as $work_spots) :
	?>


		<?php
		// Access work post object
		foreach ($work_spots as $post) :
			setup_postdata($post);

			// Access fields within post object
			$work = get_field('work');
			$work_media = $work['media'];
			$work_id_lowercase = strtolower($work['title']);
			$work_id = preg_replace('/\|/', ' ', $work_id_lowercase);
			$work_id = preg_replace('/\s+/', '_', $work_id);
			$size = "full";
			$enable_sticker = $work['enable_sticker'] ? $sticker_img = $work['sticker'] : false;
		?>

		<div class="work__full-list__project" data-video-id="<?= $work_id; ?>">
			<div class="work__full-list__project__media">
				<?php if ($work_media['poster']) { ?>
				<?= wp_get_attachment_image($work_media['poster'], $size, false, ["class" => "work__full-list__project__media__image visible"]); ?>
				<?php } else { ?>
				<img srcset="
                        https://vumbnail.com/<?= $work_media['vimeo_link']; ?>.jpg 640w, 
                        https://vumbnail.com/<?= $work_media['vimeo_link']; ?>_large.jpg 640w, 
                        https://vumbnail.com/<?= $work_media['vimeo_link']; ?>_medium.jpg 200w, 
                        https://vumbnail.com/<?= $work_media['vimeo_link']; ?>_small.jpg 100w"
					sizes="(max-width: 640px) 100vw, 640px" src="https://vumbnail.com/<?= $work_media['vimeo_link']; ?>.jpg"
					alt="Vimeo Thumbnail" class="work__full-list__project__media__image visible" />
				<?php } ?>

				<div class="work__full-list__project__media__video" id="<?= $work_id; ?>"
					data-vimeo-src="<?= $work_media['vimeo_link']; ?>">
				</div>
			</div>

			<div class="work__full-list__project__details">

				<div class="work__full-list__project__details__row">
					<span class="work__full-list__project__client"><?= $work['client']; ?></span>
					<span class="work__full-list__project__title"><?= $work['title']; ?></span>
				</div>

				<div class="work__full-list__project__details__row">
					<span class="work__full-list__project__service-name"><?= $work['service_name']; ?></span>
					<span class="work__full-list__project__service"><?= $work['service']; ?></span>
				</div>

			</div>

			<?php if($enable_sticker) { ?>
			<?= wp_get_attachment_image($sticker_img, $size, false, ["class" => "work__latest__project__sticker"]); ?>
			<?php } ?>

		</div>

		<?php
		endforeach;
		wp_reset_postdata();
		?>

		<?php
	endforeach;
	?>
	</div>


</section>