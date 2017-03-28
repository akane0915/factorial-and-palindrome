$(document).ready(function(){

  // Factorial Section
  $("#factorial").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#numberInput").val());
    var factorial = 1;
    var countDown = userInput;

    for(var i =0; i < userInput; i++){
      factorial *= countDown;
      countDown --;
    }

    $("#factorial-output").text("The answer is: " + factorial);
  })

  // Palindrome Section
  $("#palidrome").submit(function(event){
    event.preventDefault();

    var palInput = $("#palInput").val().toLowerCase();
    var reversePal = "";

    function reverseString(str){
      for(var i = str.length - 1; i >= 0; i--){
        reversePal += str[i];
      }
      return reversePal;
    }
    console.log(reverseString(palInput));
    // if(palInput === reversePal){
    //   alert
    // }else{
    //
    // }

  });

});
