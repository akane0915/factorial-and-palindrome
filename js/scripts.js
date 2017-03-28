$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#numberInput").val());
    var factorial = 1;
    var countDown = userInput;

    for(var i =0; i < userInput; i++){
      factorial *= countDown;
      countDown --;
    }

    $("#output").text("The answer is: " + factorial);
  })

});
