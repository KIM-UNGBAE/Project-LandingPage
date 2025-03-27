$(function() {

    // intro
    setTimeout(function() {
        $('.group-intro').css('opacity', '1');
    }, 1000);

    setTimeout(function() {
        $('.group-intro').css('opacity', '0');
    }, 2000);

    setTimeout(function() {
        $('.intro').css('transform', 'translateY(-100%)');
    }, 3000);


    $('.gnb .nav-list a').click(function(e) {
        e.preventDefault();
        let target = $(this).attr("href");

        if (target === "#header") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            let targetEl = $(target);
            if (targetEl.length) {
                let headerHeight = $('#header').outerHeight() || 0;
                let targetPos = targetEl.offset().top - headerHeight;

                $("html, body").stop().animate({ scrollTop: targetPos }, 600);
            }
        }
    });


    // custom-cursor
    $(document).on("mousemove", function (e) {
        $(".custom-cursor").css({
            top: e.clientY + "px",
            left: e.clientX + "px",
        });
    });
    

    // 텍스트(span) & 링크(a) 위에서 효과 추가
    $("a, .headline span").hover(
        function () {
            $(".custom-cursor").addClass("hover");
        },
        function () {
            $(".custom-cursor").removeClass("hover");
        }
    );


    // footer
    ScrollTrigger.create({
        trigger: '.footer .group-thanks',
        start: '0 90%',
        end: '100% 100%',
        onEnter: function() {
            gsap.to('.group-thanks svg', {
                opacity: 1,
                duration: 1,
                onComplete: function() {
                    gsap.to('.thanks-area', {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.3,
                    });
                }
            });
        }
    });
    

});









