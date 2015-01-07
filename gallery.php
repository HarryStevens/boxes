<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="icon" type="image/ico" href="img/favicon.ico" />
<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />
<link rel="stylesheet" href="css/jquery.contextmenu.css" />
<link rel="stylesheet" href="css/animsition.min.css" />
<link rel="stylesheet" href="css/swipebox.min.css" />
<link rel="stylesheet" href="css/styles.css" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/jquery.contextmenu.js"></script>
<script type="text/javascript" src="js/jquery.ui.touch-punch.min.js"></script>
<script type="text/javascript" src="js/html2canvas.js"></script>
<script type="text/javascript" src="js/jquery.animsition.min.js"></script>
<script type="text/javascript" src="js/jquery.swipebox.min.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>
<title>Boxes | Gallery</title>
</head>
<body class="animsition">
<div class="container-fluid">
<div class="button active animsition-link home" href="/boxes">
home
</div>
<div class="gallery-title">
u can view da gallery.
</div>
<div class="row">
<?php $dirname="images/";
	$images=glob($dirname."*.png");
	//Reverse the array so that most recent comes first.
	$reverse=array_reverse($images,true);
	foreach($reverse as $image) {
	$explode=explode('^',$image);
	$explode2=explode('.',$explode[1]);
	$title=$explode2[0];
	echo '<div class="col-md-2 col-sm-4 col-xs-6"><a rel="gallery" title="'.$title.'" class="swipebox" href="'.$image.'"><img class="gallery-img" src="'.$image.'" /></a></div>';
	//<a href="JavaScript:window.open(\'http://www.facebook.com/sharer.php?u='.$image.'\',\'\',\'width=657,height=400,scrollbars=1\')"><img src="https://www.facebook.com/images/fb_icon_325x325.png" width="20px"></a></div>';
	}
?>
</div>
</div><!-- End .container-fluid -->
<script type="text/javascript">		
	$(document).ready(function() {

		(function($) {

			$('.swipebox').swipebox({
				loopAtEnd : true,
				hideBarsDelay : 1200000
			});

		} )(jQuery);

		//dynamically set img height so that all imgs, regardless of upload browser, have the same height
		function calcHeight(){
		var imgWidth = $('.gallery-img').css('width');
		var imgWidthNum = imgWidth.split('p')[0];
		var imgHeight = imgWidthNum*1.09523809524;
		console.log('New Height: '+imgHeight);
		$('.gallery-img').css('height',imgHeight);
		}
		calcHeight();
		$(window).resize(function(){
			calcHeight();
		});


	}); 
</script>
</body>
