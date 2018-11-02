var js = document.createElement("script");
js.type = "text/javascript";

js.onload = function () {
    $(document).ready(function() {
    
    
            
            
            $("#butt3").on("click", function(){
            
            window.location ="#";
            

             });
            

    
            $(".menuIcon").on("click", function(){
            
            $("#sidebar").slideToggle(400);
           
            
        });
            $("#twitter").on("click", function(){
            
            $("#twitter").css({"animation":"1s big "});
            
          window.open( "https://twitter.com/dammfriskolan","_blank" ,"toolbar=yes,scrollbars=yes,resizable=yes,titlebar=no,top=50%,left=0%,width=900,height=1000");
   

           
           
            
        });
        
        $("#butt").on("click",function(){window.open("game.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,titlebar=no,top=50%,left=0%,width=900,height=1000");});
        $("#butt2").on("click",function(){window.location="#s";
        $("#butt2").preventdefault;
        
        });
        
    });

    

    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};

js.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.body.appendChild(js);