$(document).ready(function() {

    $('#jQueryB01').click(function(){
        console.log('btn1');
        if($('#jQueryB01').hasClass('btn-secondary'))
        {
            $('#jQueryB01').removeClass('btn-secondary');

            if($('#jQueryB02').hasClass('btn-primary'))
                {
                    $('#jQueryB02').removeClass('btn-primary');
                    $('#jQueryB02').addClass('btn-secondary');
                }
            if($('#jQueryB03').hasClass('btn-primary'))
                {
                    $('#jQueryB03').removeClass('btn-primary');
                    $('#jQueryB03').addClass('btn-secondary');
                }
            if($('#jQueryB04').hasClass('btn-primary'))
                {
                    $('#jQueryB04').removeClass('btn-primary');
                    $('#jQueryB04').addClass('btn-secondary');
                }
        }
        $('#jQueryB01').addClass('btn-primary');
    });

    $('#jQueryB02').click(function(){
        if($('#jQueryB02').hasClass('btn-secondary'))
        {
            $('#jQueryB02').removeClass('btn-secondary');

            if($('#jQueryB01').hasClass('btn-primary'))
                {
                    $('#jQueryB01').removeClass('btn-primary');
                    $('#jQueryB01').addClass('btn-secondary');
                }
            if($('#jQueryB03').hasClass('btn-primary'))
                {
                    $('#jQueryB03').removeClass('btn-primary');
                    $('#jQueryB03').addClass('btn-secondary');
                }
            if($('#jQueryB04').hasClass('btn-primary'))
                {
                    $('#jQueryB04').removeClass('btn-primary');
                    $('#jQueryB04').addClass('btn-secondary');
                }
        }
        $('#jQueryB02').addClass('btn-primary');
    });
    $('#jQueryB03').click(function(){
        if($('#jQueryB03').hasClass('btn-secondary'))
        {
            $('#jQueryB03').removeClass('btn-secondary');

            if($('#jQueryB02').hasClass('btn-primary'))
                {
                    $('#jQueryB02').removeClass('btn-primary');
                    $('#jQueryB02').addClass('btn-secondary');
                }
            if($('#jQueryB01').hasClass('btn-primary'))
                {
                    $('#jQueryB01').removeClass('btn-primary');
                    $('#jQueryB01').addClass('btn-secondary');
                }
            if($('#jQueryB04').hasClass('btn-primary'))
                {
                    $('#jQueryB04').removeClass('btn-primary');
                    $('#jQueryB04').addClass('btn-secondary');
                }
        }
        $('#jQueryB03').addClass('btn-primary');
    });
    $('#jQueryB04').click(function(){
        if($('#jQueryB04').hasClass('btn-secondary'))
        {
            $('#jQueryB04').removeClass('btn-secondary');

            if($('#jQueryB02').hasClass('btn-primary'))
                {
                    $('#jQueryB02').removeClass('btn-primary');
                    $('#jQueryB02').addClass('btn-secondary');
                }
            if($('#jQueryB03').hasClass('btn-primary'))
                {
                    $('#jQueryB03').removeClass('btn-primary');
                    $('#jQueryB03').addClass('btn-secondary');
                }
            if($('#jQueryB01').hasClass('btn-primary'))
                {
                    $('#jQueryB01').removeClass('btn-primary');
                    $('#jQueryB01').addClass('btn-secondary');
                }
        }
        $('#jQueryB04').addClass('btn-primary');
    });

    $('#jqueryB05').click(function(){
        $('#jQueryB01').removeClass('btn-primary');
        $('#jQueryB01').addClass('btn-secondary');
        $('#jQueryB02').removeClass('btn-primary');
        $('#jQueryB02').addClass('btn-secondary');
        $('#jQueryB03').removeClass('btn-primary');
        $('#jQueryB03').addClass('btn-secondary');
        $('#jQueryB04').removeClass('btn-primary');
        $('#jQueryB04').addClass('btn-secondary');
    });

    $('#owl-show-carousel').owlCarousel({
        autoplay: true, 
        autoplayHoverPause: true, 
        loop: true,
        DOTS:true,
        items:2,
        startPosition:2,
        autoplayTimeout: 1300, 
        center:false,
        smartSpeed: 1200, 
        dotsSpeed: 1000, 
        responsive : {  0 : {   items: 2  },}
  }); 

  $('#owl-home').owlCarousel({
    autoplay: true, 
    autoplayHoverPause: true, 
    loop: true,
    DOTS:true,
    items:1,
    startPosition:1,
    autoplayTimeout: 1500, 
    center:false,
    smartSpeed: 1200, 
    dotsSpeed: 1300, 
    responsive : {  0 : {   items: 1  },}
}); 


    $("*").on('click',function()
    {
        $('#owl-show-carousel').owlCarousel({
            autoplay: true, 
            autoplayHoverPause: true, 
            loop: true,
            DOTS:true,
            items:2,
            startPosition:2,
            autoplayTimeout: 1300, 
            center:false,
            smartSpeed: 1200, 
            dotsSpeed: 1000, 
            responsive : {  0 : {   items: 2  },}
      }); 
      $('#owl-home').owlCarousel({
        autoplay: true, 
        autoplayHoverPause: true, 
        loop: true,
        DOTS:true,
        items:1,
        startPosition:2,
        autoplayTimeout: 1500, 
        center:false,
        smartSpeed: 1200, 
        dotsSpeed: 1300, 
        responsive : {  0 : {   items: 1  },}
  }); 
    $('.hidepassword').click(function(){

        console.log('dfdfd')
           $(".jquery-password").attr("type","password");
    });
    $('.showpassword').click(function(){

        $(".jquery-password").attr("type","text");

    });
    $('#jQueryB01').click(function(){
        console.log('btn1');
        if($('#jQueryB01').hasClass('btn-secondary'))
        {
            $('#jQueryB01').removeClass('btn-secondary');

            if($('#jQueryB02').hasClass('btn-primary'))
                {
                    $('#jQueryB02').removeClass('btn-primary');
                    $('#jQueryB02').addClass('btn-secondary');
                }
            if($('#jQueryB03').hasClass('btn-primary'))
                {
                    $('#jQueryB03').removeClass('btn-primary');
                    $('#jQueryB03').addClass('btn-secondary');
                }
            if($('#jQueryB04').hasClass('btn-primary'))
                {
                    $('#jQueryB04').removeClass('btn-primary');
                    $('#jQueryB04').addClass('btn-secondary');
                }
        }
        $('#jQueryB01').addClass('btn-primary');
    });

    $('#jQueryB02').click(function(){
        if($('#jQueryB02').hasClass('btn-secondary'))
        {
            $('#jQueryB02').removeClass('btn-secondary');

            if($('#jQueryB01').hasClass('btn-primary'))
                {
                    $('#jQueryB01').removeClass('btn-primary');
                    $('#jQueryB01').addClass('btn-secondary');
                }
            if($('#jQueryB03').hasClass('btn-primary'))
                {
                    $('#jQueryB03').removeClass('btn-primary');
                    $('#jQueryB03').addClass('btn-secondary');
                }
            if($('#jQueryB04').hasClass('btn-primary'))
                {
                    $('#jQueryB04').removeClass('btn-primary');
                    $('#jQueryB04').addClass('btn-secondary');
                }
        }
        $('#jQueryB02').addClass('btn-primary');
    });
    $('#jQueryB03').click(function(){
        if($('#jQueryB03').hasClass('btn-secondary'))
        {
            $('#jQueryB03').removeClass('btn-secondary');

            if($('#jQueryB02').hasClass('btn-primary'))
                {
                    $('#jQueryB02').removeClass('btn-primary');
                    $('#jQueryB02').addClass('btn-secondary');
                }
            if($('#jQueryB01').hasClass('btn-primary'))
                {
                    $('#jQueryB01').removeClass('btn-primary');
                    $('#jQueryB01').addClass('btn-secondary');
                }
            if($('#jQueryB04').hasClass('btn-primary'))
                {
                    $('#jQueryB04').removeClass('btn-primary');
                    $('#jQueryB04').addClass('btn-secondary');
                }
        }
        $('#jQueryB03').addClass('btn-primary');
    });
    $('#jQueryB04').click(function(){
        if($('#jQueryB04').hasClass('btn-secondary'))
        {
            $('#jQueryB04').removeClass('btn-secondary');

            if($('#jQueryB02').hasClass('btn-primary'))
                {
                    $('#jQueryB02').removeClass('btn-primary');
                    $('#jQueryB02').addClass('btn-secondary');
                }
            if($('#jQueryB03').hasClass('btn-primary'))
                {
                    $('#jQueryB03').removeClass('btn-primary');
                    $('#jQueryB03').addClass('btn-secondary');
                }
            if($('#jQueryB01').hasClass('btn-primary'))
                {
                    $('#jQueryB01').removeClass('btn-primary');
                    $('#jQueryB01').addClass('btn-secondary');
                }
        }
        $('#jQueryB04').addClass('btn-primary');
    });
    $('#jqueryB05').click(function(){
        $('#jQueryB01').removeClass('btn-primary');
        $('#jQueryB01').addClass('btn-secondary');
        $('#jQueryB02').removeClass('btn-primary');
        $('#jQueryB02').addClass('btn-secondary');
        $('#jQueryB03').removeClass('btn-primary');
        $('#jQueryB03').addClass('btn-secondary');
        $('#jQueryB04').removeClass('btn-primary');
        $('#jQueryB04').addClass('btn-secondary');
    });
    })
   
});