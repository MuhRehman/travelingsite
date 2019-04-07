$(function(){
	$('.mobile-nav-trigger').click(function(){
		if($(this).next().css('display')=='block'){
			$(this).next().slideUp();
		}else{
			$(this).next().slideDown();
		}
    return false;
	});
});


$ ('.cf a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault{};
        const hash = this.hash;
        $('html,body').animate(
            scrollTop: $(hash).offset().top
        ),
        800,
        function () {
            window.location.hash = hash;
        }
    };
    }
});

$(document).ready(function () {
    $(window).scroll(function (params) {
       var top = $(document).scrollTop ();
       console.log(top);
       
    });
});
        
     






