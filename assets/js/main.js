$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(".navbar-toggle").on("click", function () {
    $(".mobile-navbar").toggleClass("mobile-navbar-sidebar-open");
    $("#toggle-icon").toggleClass("fa-times");
  });

  $(window).click(function () {
    $(".mobile-navbar").removeClass("mobile-navbar-sidebar-open");
    $("#toggle-icon").addClass("fa-bars");
    $("#toggle-icon").removeClass("fa-times");
  });

  $(".navbar-toggle").on("click", function (event) {
    event.stopPropagation();
  });

  $(".mobile-navbar").on("click", function (event) {
    event.stopPropagation();
  });
});
