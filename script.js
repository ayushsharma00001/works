const loading = ()=>{
    var tl = gsap.timeline();

tl.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
});

tl.from("#yellow2",{
    top:"100%",
    delay:0.6,
    duration:0.7,
    ease:"expo.out"
},"anim");

tl.to("#loader h1",{
    delay:0.6,
    color:"black",
    duration:0.7,
},"anim");
tl.to("#loader",{
    display:"none"
});
};
loading();


function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        lerp:0.03
    });
    
    document.querySelector("#footer h2").addEventListener("click",()=>{
        scroll.scrollTo(0);
    })
    
    
    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page2");
            
    elems.forEach((ele)=>{
        ele.addEventListener("mouseenter",()=>{
            var bgimg = ele.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgimg})`;
        })
    })
}
loco();