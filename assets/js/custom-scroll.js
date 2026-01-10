(function ($) {
    "use strict";
    
    var header = document.getElementById("sectionList");
        var btns = header.getElementsByClassName("list-section");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
                $('html, body').animate({
                  scrollTop: $(this).offset().top - $('.header-area').outerHeight()
                  }, 200);
            });
        };
}(jQuery));


ScrollTrigger.matchMedia({
    "(min-width: 960px)": function () {
        gsap.registerPlugin(ScrollTrigger)
        const inestors = gsap.utils.toArray(".list-section");

        inestors.forEach((ititle) => {
            gsap.to(ititle, {
                scrollTrigger: {
                    trigger: ititle,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: true,
                    markers: false,
                    toggleClass: "active",
                }
            })
        });
    },



});
