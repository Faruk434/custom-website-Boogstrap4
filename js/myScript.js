$(document).ready(function(){
    
    $('button').click(function(){
        $('#myDIV').toggle(1000);
    });
        
//    wowjs
    new WOW().init();
    
       $(document).ready(function() {
           
            $(".count").animateNumbers(4321, true, 2000);
            
            $("count").on("click", function() {
                $(this).animateNumbers(1234, false);
            });
            

        });
    
    $('#myBtn').tottTop({
            scrollTop: 50
        });

    
});


