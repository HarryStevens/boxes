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
		<link rel="stylesheet" href="css/styles.css" />
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
		<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/jquery.contextmenu.js"></script>
		<script type="text/javascript" src="js/jquery.ui.touch-punch.min.js"></script>
		<script type="text/javascript" src="js/html2canvas.js"></script>
		<script type="text/javascript" src="js/jquery.animsition.min.js"></script>
		<script type="text/javascript" src="js/scripts.js"></script>
		<title>Boxes | Upload</title>
	</head>
	<body class="animsition">
		<div class="controls controls-left">
			<div class="button-left active animsition-link" href="/boxes"> home </div><br /><br />
			<div class="button-left active animsition-link" href="gallery.php"> gallery </div>
		</div>
		<div class="content">
			<div class="title">
				u added to da gallery.
			</div>

			<?php

			//Get the base-64 string from data
			$filteredData = substr($_POST['imgVal'], strpos($_POST['imgVal'], ",") + 1);
			//Decode the string
			$unencodedData = base64_decode($filteredData);
			$length = 10;
			
			//Create a file name that will be ordered based on time of submission. Array to be reversed on display.
			$randomString = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
			$timestamp = time();
			$latestImg = "images/$timestamp-$randomString.png";

			//Save the image
			file_put_contents($latestImg, $unencodedData);
			echo "<img src='$latestImg' style='width:400px;margin:0 auto;display:table;' />";
			?>
		</div><!--End .content-->
	</body>
