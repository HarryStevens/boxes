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
		<title>Boxes</title>
	</head>
	<body class="animsition">
		<div class="controls controls-left">
			<div class="button-left active circles">
				circles
			</div>
			<br />
			<br />
			<div class="button-left active colors">
				colors
			</div>
			<br />
			<br />
			<div class="button-left inactive center">
				center
			</div>
			<br />
			<br />
			<div class="button-left inactive reset">
				reset
			</div>
		</div><!-- End .controls-left -->
		<div class="content">

			<div id="canvas">
				<div class="title">
					u can move da boxes.
				</div>
				<div class="top box violet">
					<span class="text">&nbsp;</span>
					<div class="two box move blue">
						&nbsp;
						<div class="three box move green">
							&nbsp;
							<div class="four box move yellow">
								&nbsp;
								<div class="five box move orange">
									&nbsp;
									<div class="six box move red">
										&nbsp;
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="end">
					˙sǝxoq ɐp ǝʌoɯ uɐɔ n
				</div>
			</div><!-- End #canvas -->

			<div class="modal fade" id="save" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" data-keyboard="false">
				<div class="modal-dialog">
					<div class="modal-content">

						<div class="modal-header">
							<label class="img-title">
								<input>
								</input> </label>
							<div class="button active close-modal">
								cancel
							</div>
							<a download="da boxes.png" class="button active download">download</a>
						</div>
						<div class="modal-body">
							...
						</div>
					</div><!-- End .modal-content -->
				</div><!--End .modal-dialog -->
			</div><!-- End .modal-->
		</div><!-- End .content -->
		<div class="controls controls-right">
			<a href="gallery.php" class="button-right active animsition-link"> gallery </a>
			<br />
			<br />
			<div class="button-right active save" data-toggle="modal" data-target="#save">
				save
			</div>
			<br />
			<br />
			<div class="button-right inactive upload"> upload </div>
			<br />
			<br />
			<form method="POST" enctype="multipart/form-data" action="upload.php" id="imgForm">
				<input type="hidden" name="imgVal" id="imgVal" value="" />
			</form>
		</div><!-- End .controls-right -->
	</body>
</html>