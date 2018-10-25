const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const totalHeight = $(document).height(); 
randomIcon(15,`<i class="fas fa-heart"></i>`,$(".layer1"))
randomIcon(15,`<i class="fas fa-heart"></i>`,$(".layer2"))
randomIcon(15,`<i class="fas fa-heart"></i>`,$(".layer3"))
let start

$( window ).scroll(throttle(handleScroll))
$(".start").click(autoScroll)
$(".stop").click(stopScroll)
$(".next").click(()=>ScrollNextPage(1))

function handleFadeIn(showElm){
    const inserPoint = showElm.position().top-$(window).height()/2
    if($(window).scrollTop()>=inserPoint){
        showElm.removeClass("close")
    }else {
        showElm.addClass("close")
    }
}

function handleScroll(){
    handleFadeIn($(".two *"))
    handleFadeIn($(".three *"))
    parallaxScroll()
}

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('.layer1').css('top',(0-(scrolled*.07))+'px');
	$('.layer2').css('top',(0-(scrolled*.10))+'px');
	$('.layer3').css('top',(0-(scrolled*.5))+'px');
	$('.one').css('background-position-y',(0-(scrolled*.3))+'px');
	$('.two').css('background-position-y',(0-(scrolled*.1))+'px');
	$('.three').css('background-position-y',(0-(scrolled*.1))+'px');
}

function randomIcon(num, icon, where){
    for(let i=0;i<num;i++){
        const heart = $("<div></div>").addClass("heart")
        heart.append(icon)
        heart.css({
            transform:`scale(${2}) translate(${50}%)`,
            top:Math.random()*totalHeight+"px",
            left:Math.random()*100+"vw"
        })
        where.append(heart)
    }

}



function throttle(fn, threshhold) {
    // 记录上次执行的时间
    var last
    // 定时器
    var timer
    // 默认间隔为 250ms
    threshhold || (threshhold = 100)
    // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
    return function () {
      // 保存函数调用时的上下文和参数，传递给 fn
      var context = this
      var args = arguments
      var now = +new Date()
      // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
      // 执行 fn，并重新计时
      if (last && now < last + threshhold) {
        clearTimeout(timer)
        // 保证在当前时间区间结束后，再执行一次 fn
        timer = setTimeout(function () {
          last = now
          fn.apply(context, args)
        }, threshhold)
      // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
      } else {
        last = now
        fn.apply(context, args)
      }
    }
  }


// const hearts = document.querySelectorAll(".heart")
// const heartsPosition = [...hearts].map(heart=>heart.offsetTop)
// function scrollIconMove(){
//     const presentBottom = $(window).scrollTop()+$(window).height();
//     const rate = Math.round((presentBottom/totalHeight)*100)
//     for(let i=0;i<hearts.length; i++){
//         hearts[i].style.top = heartsPosition[i]-rate*2+"px"
//     }
// }

// function autoScroll(){
//     clearInterval(start)
//     let scrollTop = $(window).scrollTop();
//     start = setInterval(()=>{
//         scrollTop+=20
//         window.scrollTo({
//             top: scrollTop,
//             behavior: "smooth"
//         })
//         const presentTop = $(window).scrollTop();
//         const screenHeight = $(window).height();
//         if(presentTop+screenHeight>=totalHeight){
//             clearInterval(start)
//         }
//     },100)
// }

// function stopScroll(){
//     clearInterval(start)
//     // $("html, body").animate({ scrollTop: 0 }, 500)
// }

// function ScrolltoBottom(s){
//     //time to scroll to bottom
//     $("html, body").animate({scrollTop: $(document).height()}, s*1000);
// }

// function ScrollNextPage(s){
//     const presentTop = $(window).scrollTop();
//     const screenHeight = $(window).height(); 
//     const next = presentTop+screenHeight
//     $("html, body").animate({scrollTop: next}, s*1000);
// }