<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<link rel="icon" type="image/ico" href="img/favicon.ico" />
		<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
		<link rel="stylesheet" href="css/swipebox.min.css" />
		<link rel="stylesheet" href="css/animsition.min.css" />
		<link rel="stylesheet" href="css/styles.css" />
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
		<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/jquery.swipebox.min.js"></script>
		<script type="text/javascript" src="js/jquery.animsition.min.js"></script>
		<title>Boxes | Gallery</title>
	</head>
	<body class="animsition">
		<div class="controls controls-left">
			<a class="button-left active animsition-link" href="/boxes"> home </a>
		</div><!-- End .controls -->
		<div class="content">

			<div class="gallery-title">
				u can view da gallery.
			</div>
			<?php $dirname = "images/";
				$images = glob($dirname . "*.png");

				//Reverse the array so that most recent comes first.
				$reverse = array_reverse($images, true);
				foreach ($reverse as $image) {
					echo '<a rel="gallery" title="u can see da slideshow." class="swipebox" href="' . $image . '"><img class="gallery-img" src="' . $image . '" /></a>';
				}
			?>
		</div>
		<script type="text/javascript">
			;(function($) {

				$('.swipebox').swipebox({
					loopAtEnd : true
				});

			} )(jQuery);

			//u can animate da page change.
			$(".animsition").animsition({

				inClass : 'fade-in-down',
				outClass : 'fade-out-up',
				inDuration : 400,
				outDuration : 400,
				linkElement : '.animsition-link',
				// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
				loading : true,
				loadingParentElement : 'body', //animsition wrapper element
				loadingClass : 'animsition-loading',
				unSupportCss : ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'],
				//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
				//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

			});
		</script>

	</body>
