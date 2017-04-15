$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 220) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#toTop').click(function () {
            $('#toTop').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        // $('#back-to-top').tooltip('show');

/*stard slider Head.....*/
  
 
/*....end slide....*/

});