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
  $("#palindrome").submit(function(event){
    event.preventDefault();

    var palInput = $("#palInput").val().toLowerCase();

    function reverseString(str){
      var reverseStr = "";
      for(var i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
      }
      return reverseStr;
    }

    var reversePal = reverseString(palInput);
    console.log(reversePal);

    if(palInput === reversePal){
      $("#palindrome-output").text(palInput + " is a palindrome");
    }else{
      $("#palindrome-output").text(palInput + " is NOT a palindrome");
    }
  });
});
