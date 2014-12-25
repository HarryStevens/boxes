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

//u can change da shapes.
//u can make da circles.
function circles() {
	$('.box').addClass('circle');
	//can't do border-radius: 50% because html2canvas
	//won't render it in web-kit browsers. need a different
	//circle class for each box.
	$('.top').addClass('circle-top');
	$('.two').addClass('circle-two');
	$('.three').addClass('circle-three');
	$('.four').addClass('circle-four');
	$('.five').addClass('circle-five');
	$('.six').addClass('circle-six');
	$('.box').removeClass('box');
	$('.circles').html('boxes.');
	$('.title').html('u can move da circles.');
	$('.end').html('˙sǝןɔɹıɔ ɐp ǝʌoɯ uɐɔ n');
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
	$('.circles').html('circles.');
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
		'left' : '19px',
		'top' : '-5px'
	});
}


$(document).ready(function() {

	//u can move da boxes.
	$('.move').draggable({
		containment : 'parent',
		//u can center da boxes.
		drag : function() {
			$('.center').addClass('active').removeClass('inactive');
			$('.box,.circle').removeClass('slowmove');
		},
		stop : function() {
			$('.box,.circle').addClass('slowmove');
			$('.center').mousedown(function() {
				$(this).addClass('inactive').removeClass('active');
				center();
			});
		},
	});

	//u can change da colors.
	$('.colors').mousedown(function() {
		colors();
	});

	var colorMenu = [{
		'red.' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				}
				if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				}
				if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				}
				if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				}
				if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				}
				if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('red');
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-red'
		}
	}, {
		'orange.' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				}
				if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				}
				if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				}
				if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				}
				if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				}
				if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('orange');
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-orange'
		}
	}, {
		'yellow.' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				}
				if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				}
				if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				}
				if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				}
				if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				}
				if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('yellow');
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-yellow'
		}
	}, {
		'green.' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				}
				if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				}
				if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				}
				if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				}
				if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				}
				if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('green');
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-green'
		}
	}, {
		'blue.' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				}
				if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				}
				if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				}
				if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				}
				if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				}
				if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('blue');
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-blue'
		}
	}, {
		'violet.' : {
			onclick : function(menuItem, menu) {
				if ($(this).hasClass('red')) {
					$(this).removeClass('red');
				}
				if ($(this).hasClass('orange')) {
					$(this).removeClass('orange');
				}
				if ($(this).hasClass('yellow')) {
					$(this).removeClass('yellow');
				}
				if ($(this).hasClass('green')) {
					$(this).removeClass('green');
				}
				if ($(this).hasClass('blue')) {
					$(this).removeClass('blue');
				}
				if ($(this).hasClass('violet')) {
					$(this).removeClass('violet');
				}
				$(this).addClass('violet');
			},
			className : 'color-menu-item',
			hoverClassName : 'color-menu-item-violet'
		}
	}];
	$.contextMenu.shadow = false;
	$(function() {
		$('.box,.circle').contextMenu(colorMenu);
	});

	//u can make da circles.
	$('.circles').mousedown(function() {
		shapes();
	});

	//u can reset da boxes.
	$('.reset').mousedown(function() {
		resetColors();
		boxes();
		center();
		$('.center').removeClass('active').addClass('inactive');
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
				$('.modal-body').html(imgURL);
				$('.download').attr('href', img);
			},
			background : '#fff'
		});

		$('.img-title input').keyup(function() {
			var imgTitle = $('.img-title input').val();

			if (imgTitle == '') {
				imgTitle = 'da boxes';
			} else {
				imgTitle == $('.img-title input').val();
			}

			$('.download').attr('download', imgTitle + '.png');
		})

		$('.close-modal').mousedown(function() {
			$('#save').modal('hide');
			$('.img-title input').val('');
		});

		$('.download').click(function() {
			$('#save').modal('hide');
			$('.img-title input').val('');
		});

	});

	$('#save').on('shown.bs.modal', function() {
		$('.img-title input').focus();
	})
});
