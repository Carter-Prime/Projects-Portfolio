window.addEventListener("hashchange", function() { scrollBy(0, -100) })

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});