$(function(){
	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});
		return false;
	})

	fechar();
	function fechar(){
		var el= $('body,a');
		el.click(function(){
			$('#mobile').fadeOut();
		})

	}
	$('.menu-mobile').click(function(e){
        $('#mobile').fadeToggle('fast');
        e.stopPropagation();
    });
});
