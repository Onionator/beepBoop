$(document).ready(function() {
  $("button").click(function() {
    //get user textInput and store only integers
    var userInput = parseInt($("input:text[name=numberInput]").val());
    console.log(userInput);

    var workingArray = createRange(userInput);
    console.log(workingArray);
    workingArray = findThrees(workingArray);
    console.log(workingArray);


    //create a range of numbers between 0 and numberInput
    function createRange(numberInput) {
      var numberRangeArray = [];
      for (i = 0; i < userInput; i++) {
        numberRangeArray.push(i);
      }
      numberRangeArray.push(numberInput);
      return numberRangeArray
    }

    // find all numbers containing 3's
    function findThrees(arrayOfNumbers) {
      var three = ["3"];
      for (i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i].toString().search("3") !== -1) {
          arrayOfNumbers[i] = "I'm sorry Dave, I can't do that.";
        }
      }
      return arrayOfNumbers;
    }

    //replace all numbers containing 3's with "I'm sorry Dave, I can't do that."

    //find all the numbers containing 2's

    // replace 2's with "Boop"

    //find all the numbers containing 1's

    // replace 1's with "Beep"

    // concat into a string

    // output final string to webpage
  });
});
