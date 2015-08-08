jQuery(document).ready(function($){

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
	$('.pwr_btn').animate({opacity: 0}, 250, 'swing', function(){
		$('footer').addClass('active');
		$('header').addClass('z-depth-2');
		$('footer').addClass('z-depth-2');
		$('.tdl_title').delay(500).fadeIn(1000);
		$('.done').delay(500).animate({opacity: 1}, 500, 'swing');
	});
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
	$('#tdl_input').delay(500).fadeIn(750);
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
		// REMOVE BUTTON
		$('.check').click(function(){
			var removeItem = $(this).parent();
			$(removeItem).animate({left: "-500px", opacity: 0}, 500, "swing", function(){
				$(this).remove();
			});
			// $(removeItem).slideToggle(250, function(){
			// 	$(this).remove();
			// });
		});
	}
});

$('.done').click(function(){
	$(this).animate({opacity: 0}, 250, 'swing', function(){
		$('.tdl_title').fadeOut(500);
		$('header').delay(500).removeClass('z-depth-2');
		$('footer').delay(500).removeClass('z-depth-2');
		$('footer').delay(500).removeClass('active');
		$('.pwr_btn').delay(1000).animate({opacity: 1}, 500, 'swing');
	});
});





function removeAll(){
    $('.remove').each(function(i) {
$(this).delay((i++) * 100).animate({
        left: '-500px', opacity: 0
    }, 500, 'swing', function(){
        $(this).remove();
    });
});
}









































});