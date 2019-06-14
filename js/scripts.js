$(document).ready(function() {
  $("button").click(function() {
    //get user textInput and store only integers
    var userInput = parseInt($("input:text[name=numberInput]").val());
    console.log(userInput);

    userInput = createRange(userInput);
    console.log(userInput);

    //create a range of numbers between 0 and numberInput
    function createRange(numberInput) {
      var numberRangeArray = [];
      for (i = 0; i < userInput; i++) {
        numberRangeArray.push(i);
      }
      numberRangeArray.push(numberInput);
      return numberRangeArray.join(" ");
    }

    // find all numbers containing 3's

    //replace all numbers containing 3's with "I'm sorry Dave, I can't do that."

    //find all the numbers containing 2's

    // replace 2's with "Boop"

    //find all the numbers containing 1's

    // replace 1's with "Beep"

    // concat into a string

    // output final string to webpage
  });
});
