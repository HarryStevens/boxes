//u can change da colors.
function colors() {
	if ($('.top').hasClass('violet')) {
		$('.top').addClass('blue');
		$('.top').removeClass('violet');
	} else if ($('.top').hasClass('blue')) {
		$('.top').addClass('green');
		$('.top').removeClass('blue');
	} else if ($('.top').hasClass('green')) {
		$('.top').addClass('yellow');
		$('.top').removeClass('green');
	} else if ($('.top').hasClass('yellow')) {
		$('.top').addClass('orange');
		$('.top').removeClass('yellow');
	} else if ($('.top').hasClass('orange')) {
		$('.top').addClass('red');
		$('.top').removeClass('orange');
	} else {
		$('.top').addClass('violet');
		$('.top').removeClass('red');
	}

	if ($('.two').hasClass('violet')) {
		$('.two').addClass('blue');
		$('.two').removeClass('violet');
	} else if ($('.two').hasClass('blue')) {
		$('.two').addClass('green');
		$('.two').removeClass('blue');
	} else if ($('.two').hasClass('green')) {
		$('.two').addClass('yellow');
		$('.two').removeClass('green');
	} else if ($('.two').hasClass('yellow')) {
		$('.two').addClass('orange');
		$('.two').removeClass('yellow');
	} else if ($('.two').hasClass('orange')) {
		$('.two').addClass('red');
		$('.two').removeClass('orange');
	} else {
		$('.two').addClass('violet');
		$('.two').removeClass('red');
	}

	if ($('.three').hasClass('violet')) {
		$('.three').addClass('blue');
		$('.three').removeClass('violet');
	} else if ($('.three').hasClass('blue')) {
		$('.three').addClass('green');
		$('.three').removeClass('blue');
	} else if ($('.three').hasClass('green')) {
		$('.three').addClass('yellow');
		$('.three').removeClass('green');
	} else if ($('.three').hasClass('yellow')) {
		$('.three').addClass('orange');
		$('.three').removeClass('yellow');
	} else if ($('.three').hasClass('orange')) {
		$('.three').addClass('red');
		$('.three').removeClass('orange');
	} else {
		$('.three').addClass('violet');
		$('.three').removeClass('red');
	}

	if ($('.four').hasClass('violet')) {
		$('.four').addClass('blue');
		$('.four').removeClass('violet');
	} else if ($('.four').hasClass('blue')) {
		$('.four').addClass('green');
		$('.four').removeClass('blue');
	} else if ($('.four').hasClass('green')) {
		$('.four').addClass('yellow');
		$('.four').removeClass('green');
	} else if ($('.four').hasClass('yellow')) {
		$('.four').addClass('orange');
		$('.four').removeClass('yellow');
	} else if ($('.four').hasClass('orange')) {
		$('.four').addClass('red');
		$('.four').removeClass('orange');
	} else {
		$('.four').addClass('violet');
		$('.four').removeClass('red');
	}

	if ($('.five').hasClass('violet')) {
		$('.five').addClass('blue');
		$('.five').removeClass('violet');
	} else if ($('.five').hasClass('blue')) {
		$('.five').addClass('green');
		$('.five').removeClass('blue');
	} else if ($('.five').hasClass('green')) {
		$('.five').addClass('yellow');
		$('.five').removeClass('green');
	} else if ($('.five').hasClass('yellow')) {
		$('.five').addClass('orange');
		$('.five').removeClass('yellow');
	} else if ($('.five').hasClass('orange')) {
		$('.five').addClass('red');
		$('.five').removeClass('orange');
	} else {
		$('.five').addClass('violet');
		$('.five').removeClass('red');
	}

	if ($('.six').hasClass('violet')) {
		$('.six').addClass('blue');
		$('.six').removeClass('violet');
	} else if ($('.six').hasClass('blue')) {
		$('.six').addClass('green');
		$('.six').removeClass('blue');
	} else if ($('.six').hasClass('green')) {
		$('.six').addClass('yellow');
		$('.six').removeClass('green');
	} else if ($('.six').hasClass('yellow')) {
		$('.six').addClass('orange');
		$('.six').removeClass('yellow');
	} else if ($('.six').hasClass('orange')) {
		$('.six').addClass('red');
		$('.six').removeClass('orange');
	} else {
		$('.six').addClass('violet');
		$('.six').removeClass('red');
	}
}

//u can reset da colors.
function resetColors() {
	$('.top').removeClass('red orange yellow green blue').addClass('violet');
	$('.two').removeClass('red orange yellow green violet').addClass('blue');
	$('.three').removeClass('red orange yellow blue violet').addClass('green');
	$('.four').removeClass('red orange green blue violet').addClass('yellow');
	$('.five').removeClass('red yellow green blue violet').addClass('orange');
	$('.six').removeClass('orange yellow green blue violet').addClass('red');
}

//u can reset everything.
function reset() {
	var twoLeft = $('.two').css('left');
	var twoTop = $('.two').css('top');
	var threeLeft = $('.three').css('left');
	var threeTop = $('.three').css('top');
	var fourLeft = $('.four').css('left');
	var fourTop = $('.four').css('top');
	var fiveLeft = $('.five').css('left');
	var fiveTop = $('.five').css('top');
	var sixLeft = $('.six').css('left');
	var sixTop = $('.six').css('top');

	if (($('.box').hasClass('box')) && ($('.top').hasClass('violet')) && ($('.two').hasClass('blue')) && ($('.three').hasClass('green')) && ($('.four').hasClass('yellow')) && ($('.five').hasClass('orange')) && ($('.six').hasClass('red')) && (twoLeft == '96px') && (twoTop == '79px') && (threeLeft == '65px') && (threeTop == '44px') && (fourLeft == '43px') && (fourTop == '22px') && (fiveLeft == '27px') && (fiveTop == '6px') && (sixLeft == '21px') && (sixTop == '-3px')) {
		$('.reset,.upload').addClass('inactive').removeClass('active');
	} else {
		$('.reset,.upload').addClass('active').removeClass('inactive');
	}
}

//u can change da shapes.
//u can make da circles.
function circles() {
	$('.box').addClass('circle');
	//can't do border-radius: 50% because html2canvas
	//won't render it in webkit browsers. need a different
	//circle class for each box.
	$('.top').addClass('circle-top');
	$('.two').addClass('circle-two');
	$('.three').addClass('circle-three');
	$('.four').addClass('circle-four');
	$('.five').addClass('circle-five');
	$('.six').addClass('circle-six');
	$('.box').removeClass('box');
	$('.circles').html('boxes');
	$('.title').html('u can move da circles.');
	$('.end').html('˙sǝןɔɹıɔ ɐp ǝʌoɯ uɐɔ n');
	$('.reset').addClass('active').removeClass('inactive');
}

//u can make da boxes.
function boxes() {
	$('.circle').addClass('box');
	$('.top').removeClass('circle-top');
	$('.two').removeClass('circle-two');
	$('.three').removeClass('circle-three');
	$('.four').removeClass('circle-four');
	$('.five').removeClass('circle-five');
	$('.six').removeClass('circle-six');
	$('.circle').removeClass('circle');
	$('.circles').html('circles');
	$('.title').html('u can move da boxes.');
	$('.end').html('˙sǝxoq ɐp ǝʌoɯ uɐɔ n');
}

//conditional function to be used when boxes./circles. button clicked
function shapes() {
	if ($('.box').hasClass('box')) {
		circles();
	} else if ($('.circle').hasClass('circle')) {
		boxes();
	}
}

//u can center da boxes.
function center() {
	$('.two').css({
		'left' : '96px',
		'top' : '79px'
	});
	$('.three').css({
		'left' : '65px',
		'top' : '44px'
	});
	$('.four').css({
		'left' : '43px',
		'top' : '22px'
	});
	$('.five').css({
		'left' : '27px',
		'top' : '6px'
	});
	$('.six').css({
		'left' : '21px',
		'top' : '-3px'
	});
}


$(document).ready(function() {

	//u can move da boxes.
	$('.move').draggable({
		containment : 'parent',
		//u can center da boxes.
		drag : function() {
			$('.center,.reset,.upload').addClass('active').removeClass('inactive');
			$('.box,.circle').removeClass('slowmove');
		},
		stop : function() {
			$('.box,.circle').addClass('slowmove');
			$('.center').mousedown(function() {
				$(this).addClass('inactive').removeClass('active');
				if (($('.box').hasClass('box')) && ($('.top').hasClass('violet')) && ($('.two').hasClass('blue')) && ($('.three').hasClass('green')) && ($('.four').hasClass('yellow')) && ($('.five').hasClass('orange')) && ($('.six').hasClass('red'))) {
					$('.reset,.upload').addClass('inactive').removeClass('active');
				}
				center();
			});
		},
	});

	//u can change da colors.
	$('.colors').mousedown(function() {
		colors();
		reset();
	});

	var colorMenu = [{
		'red' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				} else if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				} else if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				} else if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				} else if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				} else if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('red');
				reset();
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-red'
		}
	}, {
		'orange' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				} else if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				} else if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				} else if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				} else if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				} else if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('orange');
				reset();
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-orange'
		}
	}, {
		'yellow' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				} else if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				} else if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				} else if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				} else if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				} else if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('yellow');
				reset();
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-yellow'
		}
	}, {
		'green' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				} else if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				} else if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				} else if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				} else if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				} else if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('green');
				reset();
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-green'
		}
	}, {
		'blue' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				} else if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				} else if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				} else if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				} else if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				} else if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('blue');
				reset();
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-blue'
		}
	}, {
		'violet' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				} else if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				} else if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				} else if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				} else if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				} else if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('violet');
				reset();
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-violet',
		}
	}];
	$.contextMenu.shadow = false;
	$(function() {
		$('.box,.circle').contextMenu(colorMenu);
		$('td').prepend('<div class="color-menu-title">colors</div>');
		//u can calculate da context menu location. (there appears to be a bug in contextmenu library that offsets the menu far from the cursor location)
		function calcOffset() {
			var windowWidth = $(window).width();
			var leftOffset = -(windowWidth * .24305555555);
			$('table').css('margin-left', leftOffset);
		}
		calcOffset();
		$(window).resize(function(){
			calcOffset();
		});
		
	});

	//u can make da circles.
	$('.circles').mousedown(function() {
		shapes();
		reset();
	});

	//u can reset da boxes.
	$('.reset').mousedown(function() {
		resetColors();
		boxes();
		center();
		$('.center,.reset,.upload').removeClass('active').addClass('inactive');
	});

	//u can save da boxes.
	$('.save').mousedown(function() {
		if ($('.box').hasClass('box')) {
			$('.img-title input').attr('placeholder', 'u can name da boxes.');
			$('.download').attr('download', 'da boxes.png');
		} else if ($('.circle').hasClass('circle')) {
			$('.img-title input').attr('placeholder', 'u can name da circles.');
			$('.download').attr('download', 'da circles.png');
		}

		html2canvas($('#canvas'), {
			logging : true,
			useCORS : true,
			onrendered : function(canvas) {
				img = canvas.toDataURL("image/jpg");
				imgURL = '<img class="save-image" width="500px" src="' + img + '">';
				$('#save .modal-body').html(imgURL);
				$('.download').attr('href', img);
			},
			background : '#fff'
		});

		$('.img-title input').keyup(function() {
			var imgTitle = $('.img-title input').val();

			if ((imgTitle == '') && ($('.box').hasClass('box'))) {
				imgTitle = 'da boxes';
			} else if ((imgTitle == '') && ($('.circle').hasClass('circle'))) {
				imgTitle = 'da circles';
			} else {
				imgTitle == $('.img-title input').val();
			}

			$('.download').attr('download', imgTitle + '.png');
		})

		$('.close-modal').mousedown(function() {
			$('#save').modal('hide');
		});

		$('.download').click(function() {
			$('#save').modal('hide');
			$('.img-title input').val('');
		});

	});

	$('#save .modal-dialog').draggable({
		handle : '.modal-header',
		scroll : false,
		stop : function(event, ui) {
			$('.img-title input').focus();
		}
	});

	$('#save').on('hidden.bs.modal', function() {
		$('.img-title input').val('');
		$('#save .modal-dialog').css({
			'top' : '0px',
			'left' : '0px'
		})
	})

	$('#save').on('shown.bs.modal', function() {
		$('.img-title input').focus();
	});

	//u can upload da boxes.
	$('.upload').mousedown(function() {
		var twoLeft = $('.two').css('left');
		var twoTop = $('.two').css('top');
		var threeLeft = $('.three').css('left');
		var threeTop = $('.three').css('top');
		var fourLeft = $('.four').css('left');
		var fourTop = $('.four').css('top');
		var fiveLeft = $('.five').css('left');
		var fiveTop = $('.five').css('top');
		var sixLeft = $('.six').css('left');
		var sixTop = $('.six').css('top');

		if (($('.box').hasClass('box')) && ($('.top').hasClass('violet')) && ($('.two').hasClass('blue')) && ($('.three').hasClass('green')) && ($('.four').hasClass('yellow')) && ($('.five').hasClass('orange')) && ($('.six').hasClass('red')) && (twoLeft == '96px') && (twoTop == '79px') && (threeLeft == '65px') && (threeTop == '44px') && (fourLeft == '43px') && (fourTop == '22px') && (fiveLeft == '27px') && (fiveTop == '6px') && (sixLeft == '21px') && (sixTop == '-3px')) {

		} else {

			html2canvas($('#canvas'), {
				logging : true,
				useCORS : true,
				onrendered : function(canvas) {
					img = canvas.toDataURL("image/jpg");
					//set hidden field's value to image data (base-64 string).
					$('#imgVal').val(img);
					//submit da form manually.
					$.post('upload.php', $('#imgForm').serialize());
					$('#upload').modal('show');
					$('.close-modal').mousedown(function() {
						$('#upload').modal('hide');
					});

					//add da image to da modal.
					imgURL = '<img class="save-image" width="500px" src="' + img + '">';
					$('#upload .modal-body').html(imgURL);

					//drag da modal.
					$('#upload .modal-dialog').draggable({
						handle : '.modal-header',
						scroll : false
					});

					//return da modal to center.
					$('#upload').on('hidden.bs.modal', function() {
						$('#upload .modal-dialog').css({
							'top' : '0px',
							'left' : '0px'
						})
					})
				},
				background : '#fff',
			});
		}

	});

	//u can open da info
	$('.info').mousedown(function() {
		$('#info').modal('show');
	});
	$('.close-info').mousedown(function() {
		$('#info').modal('hide');
	});
	$('#info').on('hidden.bs.modal', function() {
		$('#info .modal-dialog').css({
			'top' : '40px',
			'left' : '0px'
		})
	})
	$('#info .modal-dialog').draggable({
		handle : '.modal-header',
		scroll : false
	});

	//u can animate da page change.
	$('.animsition').animsition({

		inClass : 'fade-in-down',
		outClass : 'fade-out-up',
		inDuration : 400,
		outDuration : 400,
		linkElement : '.animsition-link',
		loading : true,
		loadingParentElement : 'body', //animsition wrapper element
		loadingClass : 'animsition-loading',
		unSupportCss : ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'],
		//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

	});

});
