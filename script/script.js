let navBar = $(".navbar");


$(window).scroll(()=>{
    let offSet = $(".section-2").offset().top - window.innerHeight
    if($(window).scrollTop() >= offSet){
        navBar.addClass("sticky");
    }
    else{
        navBar.removeClass("sticky");
    }
});

let nCount = selector =>{
    $(selector).each(function(){
        $(this)
        .animate({
            Counter: $(this).text()
        },{
            duration:4000,
            step: function(value){
                $(this).text(Math.ceil(value))
            }
        });
    });
}

let a = 0;
$(window).scroll(()=>{
    let offSet = $(".numbers").offset().top - window.innerHeight;
    if(a==0 && $(window).scrollTop() >= offSet){
        a++;
        nCount(".rect > h1");
    }
})