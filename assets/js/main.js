$(function(){

    // sc-headline
    gsap.to(".headline span", {
        y: () => gsap.utils.random(50, 200),
        opacity: 0,
        rotation: () => gsap.utils.random(-360, 100),
        stagger: 0.08,
        scrollTrigger: {
            trigger: ".sc-headline",
            start: "0% 0%", 
            end: "100% 30%",
            scrub: 1.2,
        }
    });
    
    
    // sc-projects
    $('.sc-projects .projects-item').each(function(i, el) {
        ScrollTrigger.create({
            trigger: el,
            start: '0% 50%',
            end: '100% 100%',
            markers:true,
            onEnter: function() {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 0.1,
                    delay: i % 2 === 0 ? 0 : 0.3,
                });
            }
        });
    });
    
})