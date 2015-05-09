//initialises everything
$(document).ready(function(){
	
	initSquares(16);
	draw();
	clearGrid();

});
	
	//sets up the squares in the container
	function initSquares(x){
	for (var rows = 0; rows < x; rows++){
		for (var columns = 0; columns < x; columns++){
			$('#container').append('<div class="square"></div>');
		};
	};
	$('.square').width(960/x);
	$('.square').height(960/x);

	
	};
	//sets up a function that draws on the container when mouse hovers over the squares
	var draw = function(){
		$('.square').mouseover(function(){
			$(this).css("background-color", get_random_color);
		});
	};

	//set up a function that clears the container div when the button is pressed
	function clearGrid(){
		$('.button').click(function(){
			$('.square').remove();
			//send the user a popup asking how many squares per side to make the new grid
			var answer = prompt('How many squares per side?');
			//refresh the grid
			initSquares(answer);
			draw();
		});
	}

	var get_random_color = function(){
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color = color + letters[Math.round(Math.random() * 15)];
		}
		return color;
	}

	



	