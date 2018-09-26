$(document).ready(function(){
   
    if (is.ios() && is.safari()) {
        $('.calendar').css('padding-bottom', '70px');
        $('.sidebar-sticky').css('padding-top', '70px');
    }
})