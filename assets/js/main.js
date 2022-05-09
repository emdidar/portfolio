/************************
    Smooth Scrolling
************************/
$(document).ready(function () {
    //add smooth scrolling to all links
    $("a").on('click', function (event) {

        //if link is an anchor link
        if (this.hash !== "") {

            //prevent default behavior
            event.preventDefault();

            //get the hash value
            var hash = this.hash;

            //use jQuery's animate() method to add smooth page scroll
            //the optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                //add hash (#) to URL when done scrolling
                window.location.hash = hash;

            });
        } //end if
    });
});