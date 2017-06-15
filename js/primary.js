  setTimeout(function() {
            $('#myModal').modal();
        }, 3000);
        
        $(document).ready(function () {
            
            $('#myModal').scroll(function () {
                
            var st = $(this).scrollTop();
            var lastScrollTop = st;
                
            if (st > lastScrollTop) {
                $('.chisel').animate({top: '+=10'}, 10);
            } else {
                $('.chisel').animate({top: '-=10'}, 10);
            }
        });
    });
        
        $(document).ready(function () {
            
            $('#myModal').scroll(function () {
                
            var st = $(this).scrollTop();
            var lastScrollTop = st;
                
            if (st > lastScrollTop) {
                $('.shavings').animate({top: '-=10'}, 10);
            } else {
                $('.shavings').animate({top: '+=10'}, 10);
            }
                
            $(document).unbind("scroll");
            
    });
});