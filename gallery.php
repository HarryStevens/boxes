<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="icon" type="image/ico" href="img/favicon.ico" />
		<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/swipebox.min.css" />
		<link rel="stylesheet" href="css/styles.css" />
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
		<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/jquery.swipebox.min.js"></script>
		<title>Boxes | Gallery</title>
	</head>
	<body>
		<div class="controls controls-left">
			<a class="button-left active" href="/boxes"> home </a>
		</div><!-- End .controls -->
		<div class="content">

			<div class="gallery-title">
				u can view da gallery.
			</div>
			<?php $dirname = "images/";
			$images = glob($dirname . "*.png");
			foreach ($images as $image) {
				echo '<a rel="gallery" title="u can see da slideshow." class="swipebox" href="' . $image . '"><img class="gallery-img" src="' . $image . '" /></a>';
			}
			?>
		</div>
		<script type="text/javascript">
			;(function($) {

				$('.swipebox').swipebox({
					loopAtEnd: true
				});

			} )(jQuery);
		</script>

	</body>
