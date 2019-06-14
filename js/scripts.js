$(document).ready(function() {
  $("button").click(function() {
    //get user textInput and store only integers
    var userInput = parseInt($("input:text[name=numberInput]").val());
    console.log(userInput);

    var workingArray = createRange(userInput);
    console.log(workingArray);
    workingArray = findThrees(workingArray);
    console.log(workingArray);
    workingArray = findTwos(workingArray);
    console.log(workingArray);
    workingArray = findOnes(workingArray);
    console.log(workingArray);
    userInput = arrayToStringWithSpaces(workingArray);
    console.log(userInput);
    // output final string to webpage
    $("#result").text(userInput);
    //create a range of numbers between 0 and numberInput
    function createRange(numberInput) {
      var numberRangeArray = [];
      for (i = 0; i < userInput; i++) {
        numberRangeArray.push(i);
      }
      numberRangeArray.push(numberInput);
      return numberRangeArray
    }
    // find all numbers containing 3's and replace all numbers containing 3's with "I'm sorry Dave, I can't do that."
    function findThrees(arrayOfNumbers) {
      for (i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i].toString().search("3") !== -1) {
          arrayOfNumbers[i] = "I'm sorry Dave, I can't do that.";
        }
      }
      return arrayOfNumbers;
    }
    //find all the numbers containing 2's and replace 2's with "Boop"
    function findTwos(arrayOfNumbers) {
      for (i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i].toString().search("2") !== -1) {
          arrayOfNumbers[i] = "Boop";
        }
      }
      return arrayOfNumbers;
    }
    //find all the numbers containing 1's and replace 1's with "Beep"
    function findOnes(arrayOfNumbers) {
      for (i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i].toString().search("1") !== -1) {
          arrayOfNumbers[i] = "Beep";
        }
      }
      return arrayOfNumbers;
    }
    // concat into a string with spaces between each element
    function arrayToStringWithSpaces(array) {
      return array.join(" ");
    }
  });
});
