// Toggle Click - Button
$(document).ready(function() {
    console.log("hello - you're looking at the console :)");
    $("button1").html ("Click me to display the Date and Time!")
    $(".btn1").html ("Disappear")
    $(".btn2").html ("Appear")
    $(".btn3").html ("Click for it to go away!!!")
    $(".btn4").html ("If you wanna see it :(")
    $("button").on("click", function(event) {
        $("#date").toggleClass('warning');
        console.log(" the times clicked on any buttons");
        
    });
});

// Button for *Note*
$(document).ready(function(){
        $(".btn1").click(function(){
          $(".hate1").fadeOut(1000);
        });
        $(".btn2").click(function(){
          $(".hate1").fadeIn(1000);
        });
      });

// Second Button for Insect
$(document).ready(function(){
        $(".btn3").click(function(){
          $(".hate").fadeOut(1000);
        });
        $(".btn4").click(function(){
          $(".hate").fadeIn(1000);
        });
      });
