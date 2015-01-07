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
			</div><!-- End .content -->
			<div class="controls controls-right">
				<div class="button-right active info">
					info
				</div>
				<br />
				<br />
				<div href="gallery" class="button-right active animsition-link">
					gallery
				</div>
				<br />
				<br />
				<div class="button-right active save" data-toggle="modal" data-target="#save">
					save
				</div>
				<br />
				<br />
				<div class="button-right inactive upload">
					submit
				</div>
				<br />
				<br />
				<form method="POST" enctype="multipart/form-data" action="upload.php" id="imgForm">
					<input type="hidden" name="imgVal" id="imgVal" value="" />
				</form>
			</div><!-- End .controls-right -->

			<!-- Modals -->
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

			<div class="modal fade" id="upload" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" data-keyboard="false">
				<div class="modal-dialog">
					<div class="modal-content">

						<div class="modal-header">
							<div class="gallery-modal-header">
								danx for ur submission.
							</div>
							<div class="button active close-modal">
								home
							</div>
							<a href="gallery" class="button-left active animsition-link" style="margin-right:10px;">gallery</a>

						</div>
						<div class="modal-body">
							...
						</div>
					</div><!-- End .modal-content -->
				</div><!--End .modal-dialog -->
			</div><!-- End .modal-->

			<div class="modal fade" id="info" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" data-keyboard="false">
				<div class="modal-dialog">
					<div class="modal-content">

						<div class="modal-header">
							<div class="gallery-modal-header">
								what da?
							</div>
							<div class="button active close-modal close-info">
								close
							</div>
						</div>
						<div class="modal-body">

							<div class="info-left">
								<strong>instructions:</strong>
								<ol>
									<li>
										click and drag da boxes.
									</li>
									<li>
										right-click da boxes to change da colors.
									</li>
									<li>
										use da controls on da left to play.
									</li>
									<li>
										press da buttons on da right to view da gallery, save da boxes to da hard drive, or submit da boxes to da gallery.
									</li>
								</ol>
							</div>

							<div class="info-right">
								<strong>about:</strong>
								<ol>
									<li>
										da constraints are part of da fun.
									</li>
									<li>
										built wit html, css, php, javascript, <a href="http://jquery.com/" target="_blank">jquery</a>, <a href="http://jqueryui.com/" target="_blank">jquery ui</a>, <a href="http://getbootstrap.com/" target="_blank">bootstrap</a>, <a href="http://ignitersworld.com/lab/contextMenu.html" target="_blank">contextmenu.js</a>, <a href="http://touchpunch.furf.com/" target="_blank">touchpunch</a>, <a href="http://html2canvas.hertzen.com/" target="_blank">html2canvas</a>, <a href="http://git.blivesta.com/animsition/" target="_blank">animsition</a>, <a href="http://www.appelsiini.net/projects/lazyload" target="_blank">Lazy Load</a> and <a href="http://brutaldesign.github.io/swipebox/" target="_blank">swipebox</a>.
									</li>
									<li>
										<a href="https://github.com/HarryStevens/boxes" target="_blank">view da source</a>.
									</li>
									<li>
										by <a href="http://harryjstevens.com/">harry stevens</a>.
									</li>
								</ol>
							</div>

						</div>
					</div><!-- End .modal-content -->
				</div><!--End .modal-dialog -->
			</div><!-- End .modal-->
	</body>
</html>

