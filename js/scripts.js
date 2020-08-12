/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797979" });
 });
$(document).ready(function(){
   $('#header a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 700);
      e.preventDefault();
   });
   return false;
});



//$(function()
//{
//	$('.scroll-pane').jScrollPane();
//});

/*Fancybox*/
$(document).ready(function(){

            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay, #fancybox-overlay-2, #fancybox-overlay-3, #fancybox-overlay-4").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 385,
        minHeight: 291,
        autoSize: true,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: true,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	
   });
/*Fancybox end*/ 

	//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});
 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 500,
		arrows: true,
        fixed: false,
        autoCenter: true,
     
    });





$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		var offSet = $("#section-2").offset().top - 85;
		
		

		var offSetBottom = $("#section-2").offset().top + $("#section-2").outerHeight();

		if(scroll >= offSet && scroll <= offSetBottom) {
			$(".top-header").addClass("white");
			$("ul.social-list").addClass("white");
		} else {
			$(".top-header").removeClass("white");
			$("ul.social-list").removeClass("white");
		}
		
	});
	
});




