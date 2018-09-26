$(document).ready(function () {
    
        $('#toggler').on('click', function () {
            $('.sidebar').toggleClass('viewable');
            $('.calendar').toggleClass('moveable');
        });
        $(window).on('resize', function() {
            if($(window).width() <= 991) {
                $('.sidebar').removeClass('viewable');
                $('.calendar').removeClass('moveable');
            }else{
                $('#body').addClass('viewable');
            }
        })
        $(".container-fluid").on('click',
          function(e)
          {
            if(e.target.className !== "sidebar")
            {
                $('.sidebar').removeClass('viewable');
                $('.calendar').removeClass('moveable');
            }
          }
        );
    
    });