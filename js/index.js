/// <reference types="../@types/@types/jquery" />

// frist 
$(function(){
    $(".open").on("click",function(){
        // console.log("hello")
        $(".asid").css("width","250px")
    })
        
$(".closebtn").on("click",function(){
    $(".asid").css("width","0")
})

$("a[href ^= '#']").on("click",function(e){
    let aHref = $(e.target).attr("href")
    let sectionOffset = $(aHref).offset().top
    $("body,html").animate({"scrollTop":sectionOffset},1000)
})
})

// sec
$(function(){
    $(".header1").on("click",function(){
        $("#paragrh").not(".paragrh1").slideUp();
        $(".paragrh1").slideToggle()
     
    })
    $(".header2").on("click",function(){
        $("#paragrh").not(".paragrh2").slideUp();
      $(".paragrh2").slideToggle()
    })
        
    $(".header3").on("click",function(){
        $("#paragrh").not(".paragrh3").slideUp();
                $(".paragrh3").slideToggle()
             
            })

            $(".header4").on("click",function(){
                $("#paragrh").not(".paragrh4").slideUp();
                    $(".paragrh4").slideToggle()
               
                     })
})
// sec3

$(function(){
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;


        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mintues = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor((timeLeft % (1000 * 60)) / 1000);

        $("#days").text(days);
        $("#hours").text(hours);
        $("#mmintues").text(mintues);
        $("#second").text(second);

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            $("#countdown").text("Countdown has ended!");
        }
    }
    const countdownInterval = setInterval(updateCountdown, 1000);
});

// sec4

$(function(){
    const maxLength = 100;

    $("textarea").on("input",function(){
        const rem = maxLength - $(this).val().length;
        $("#text").text(rem);
    })
})

