gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();








gsap.to("#nav",{
        scrollTrigger:{
        
        trigger:"#nav",
        scroller:"#main",
        // markers:true,
        start:"top -10%",
        end:"top 60%",
        scrub:true
    }
})
gsap.from("#nav1",{
    duration:1,
    delay:0.5,
    y:-68,
    stagger:0.5,

})
gsap.from("#nav2 h4",{
    duration:1,
    delay:1,
    y:-60,
    stagger:0.5,

})
gsap.from("#nav3",{
    duration:1,
    delay:2,
    y:-68,
    stagger:0.5,

})
gsap.from("#box h1,#box p,#box button",{
    duration:1,
    y:90,
    delay:2.5,
    stagger:0.2,
    opacity:0
})
gsap.from("#page2 h1",{
    duration:1,
    opacity:0,
    x:-150,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        scrub:2
    }
})
gsap.from("#box2",{
    duration:1,
    opacity:0,
    x:300,
    scrollTrigger:{
        trigger:"#box2",
        scroller:"#main",
        // markers:true,
        start:"top 110%",
        end:"top 70%",
        scrub:2
    }
})

gsap.from("#page3 h2",{
    duration:1,
    opacity:0,
    y:100,
    
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"#main",
        start:"top 90%",
        scrub:2,
    }
})
gsap.from("#box3",{
    duration:1,
    opacity:0,
    y:100,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#box3",
        scroller:"#main",
        start:"top 90%",
        scrub:2,
        // markers:true,
        end:"top 50%"
    }
})
gsap.from("#box4",{
    duration:1,
    opacity:0,
    y:100,
    delay:0.5,
    scrollTrigger:{
        trigger:"#box4",
        scroller:"#main",
        start:"top 90%",
        scrub:2,
        // markers:true,
        end:"top 50%"
    }
})
gsap.from("#b4",{
    duration:1,
    opacity:0,
    y:100,
    delay:1,
    scrollTrigger:{
        trigger:"#b4",
        scroller:"#main",
        start:"top 90%",
        scrub:2,
        // markers:true,
        end:"top 50%"
    }
})
gsap.from("#box5",{
    duration:1,
    opacity:0,
    y:100,
    
    scrollTrigger:{
        trigger:"#box5",
        scroller:"#main",
        start:"top 90%",
        scrub:2,
        // markers:true,
        end:"top 75%"
    }
})
gsap.from("#page5>h1",{
    duration:1,
    x:-100,
    scrollTrigger:{
        trigger:"#page5>h1",
        scroller:"#main",
        start:"top 90%",
        scrub:2,
        // markers:true,
        end:"top 70%"
    }
})
gsap.from("#page5 button",{
    duration:1,
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page5 button",
        scroller:"#main",
        start:"top 90%",
        scrub:2,
        // markers:true,
        end:"top 70%"
    }
})
gsap.from(".card",{
    duration:1,
    y:200,
    opacity:0,
    scrollTrigger:{
        trigger:".card",
        scroller:"#main",
        start:"top 110%",
        scrub:2,
        // markers:true,
        end:"top 55%"
    }
})

gsap.from("#box7 h2,.line,#box7 button",{
    duration:1,
    y:100,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".line",
        scroller:"#main",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:2
    }
})