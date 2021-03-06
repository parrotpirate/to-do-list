jQuery(document).ready(function($){
	
// Hide 'CLEAR ALL' BUTTON WHEN NO LIST ITEMS PRESENT
function removeAllHide(){
	var x = $('.remove').length;
	if(x >= 1){
		$('.clear_all').fadeIn(250);
	} else{
		$('.clear_all').fadeOut();
	}
}

function counter(){
	var x = $('.remove').length;
	if(x > 1){
		$('.item_counter').html('<p class="item_counter_p"><span class="item_counter_icon z-depth-2">' + x + ' </span>items in list.</p>');
	} else if(x === 1){
		$('.item_counter').html('<p class="item_counter_p"><span class="item_counter_icon z-depth-2">' + x + ' </span>item in list.</p>').fadeIn(500);
	} else {
		$('.item_counter').html("<p class = 'item_counter_p'>Congrats! You've completed your list.").delay(3000).fadeOut(500);
	}
}

// PLAY BUTTON CLICK SOUND
function playAudio(){
	var audio = $("#click_sound")[0];
	audio.play();
}

// Power button 

$('.pwr_btn').mouseenter(function(){
	$(this).removeClass('z-depth-3');
	$(this).addClass('z-depth-1');
});

$('.pwr_btn').mouseleave(function(){
	$(this).removeClass('z-depth-1');
	$(this).addClass('z-depth-3');
});

$('.pwr_btn').click(function(){
	$('.pwr_btn').animate({opacity: 0}, 250, 'swing').delay(250).queue(function(next){
		$('footer').addClass('active');
		$('header').addClass('z-depth-2');
		$('footer').addClass('z-depth-2');
		$('.tdl_title').delay(500).fadeIn(1000);
		$('.done').delay(500).animate({opacity: 1}, 500, 'swing');
		next();
	});
	playAudio();
});

// Add button
$('.add_btn').mouseenter(function(){
	$(this).removeClass('z-depth-2');
	$(this).addClass('z-depth-1');
});

$('.add_btn').mouseleave(function(){
	$(this).removeClass('z-depth-1');
	$(this).addClass('z-depth-2');
});

$('.add_btn').click(function(){
	$('.add_btn .material-icons').fadeOut();
	$('.add_btn').delay(250).addClass('active');
	$('#tdl_input').delay(500).fadeIn(0, function(){
		$(this).focus();
	});
	playAudio();
});


//Input field
$('#tdl_input').keypress(function(e){
	var x = e.keyCode;
	if (x === 13) {
		listItemEntry = $('#tdl_input').val();
		$('#tdl_input').val('').fadeOut(250);
		$('.add_btn').delay(250).removeClass('active');
		$('.add_btn .material-icons').delay(300).fadeIn();
		$('.to_do_list').append('<li class="remove valign-wrapper card-panel lime"><i class="material-icons check">done</i>' + " " + " " + listItemEntry + "</li>");
		$('.remove').last().fadeOut(0);
		$('.remove').last().fadeIn(500);
		removeAllHide();
		counter();
		// REMOVE BUTTON
		$('.check').click(function(){
			var removeItem = $(this).parent();
			$(removeItem).animate({left: "-500px", opacity: 0}, 500, "swing", function(){
				$(this).remove();
				removeAllHide();
				counter();
			});
			playAudio();
		});
	}
});

// CLEAR ALL BUTTON
$('.clear_all').click(function removeAll(){
	$('.clear_all').fadeOut();
    $('.remove').reverse().each(function(i) {
		$(this).delay((i++) * 100).animate({
        	left: '-500px', opacity: 0
   			}, 500, 'swing', function(){
    			$(this).remove();
    			counter();
    		});
	});
	playAudio();
});

// DONE BUTTON
$('.done').click(function(){
	$(this).animate({opacity: 0}, 250, 'swing', function(){
		$('.tdl_title').fadeOut(500);
		$('header').delay(500).removeClass('z-depth-2');
		$('footer').delay(500).removeClass('z-depth-2');
		$('footer').delay(500).removeClass('active');
		$('.pwr_btn').delay(1000).animate({opacity: 1}, 500, 'swing');
	});
	playAudio();
});














































});