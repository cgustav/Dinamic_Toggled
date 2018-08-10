(function () {
    var header = document.querySelector("header");
    var headroom = new Headroom(header);
    headroom.init();

    //Responsive Menu;
    //Calculate web page width
    var width = $(window).width(),
        links = $('#links'),
        btnMenu = $('#btn-menu'),
        icon = $('#btn-menu .iconf');

    /*Hide the link section in the navbar below 700px width*/
    if (width < 700) {
        links.hide();
        icon.addClass('fa-bars');
    }

    //Change bars icon when is clicked
    btnMenu.on('click', function (e) {
        links.slideToggle();
        icon.toggleClass('fa-bars');
        icon.toggleClass('fa-times');
    });

    //when screen size is above 700px, the get back the navbar to a normal state
    $(window).on('resize', function (e) {
        if ($(this).width() > 700) {
            links.show();
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        }else{
            //Fix navbar icon issues
            links.hide();
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });

    

})();