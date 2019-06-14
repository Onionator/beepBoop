$(document).ready(function() {
  // Gets user input. Builds a string of numbers from 0 counting up to user specified number. Replaces all numbers containing 1, 2, or 3 with specified text. Returns a string.
  $("button").click(function() {
    //get user textInput and store only integers
    var userInput = parseInt($("input:text[name=numberInput]").val());
    //Builds a string of numbers from 0 counting up to user specified number
    var workingArray = createRange(userInput);
    // find all numbers containing 3's and replace all numbers containing 3's with "I'm sorry Dave, I can't do that."
    workingArray = findThrees(workingArray);
    //find all the numbers containing 2's and replace 2's with "Boop"
    workingArray = findTwos(workingArray);
    //find all the numbers containing 1's and replace 1's with "Beep"
    workingArray = findOnes(workingArray);
    // join all elements of array into a string with spaces between each element
    userInput = arrayToStringWithSpaces(workingArray);
    // output final string
    $(".result").text(userInput);

    



    //create a range of numbers between 0 and numberInput
    function createRange(numberInput) {
      var numberRangeArray = [];
      for (i = 0; i <= userInput; i++) {
        numberRangeArray.push(i);
      }
      return numberRangeArray;
    }
    // find all numbers containing 3's and replace all numbers containing 3's with "I'm sorry Dave, I can't do that."
    function findThrees(arrayOfNumbers) {
      for (i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i].toString().search("3") !== -1) {
          arrayOfNumbers[i] = '"I\'m sorry, Dave. I\'m afraid I can\'t do that."';
        }
      }
      return arrayOfNumbers;
    }
    //find all the numbers containing 2's and replace 2's with "Boop"
    function findTwos(arrayOfNumbers) {
      for (i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i].toString().search("2") !== -1) {
          arrayOfNumbers[i] = '"Boop!"';
        }
      }
      return arrayOfNumbers;
    }
    //find all the numbers containing 1's and replace 1's with "Beep"
    function findOnes(arrayOfNumbers) {
      for (i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i].toString().search("1") !== -1) {
          arrayOfNumbers[i] = '"Beep!"';
        }
      }
      return arrayOfNumbers;
    }
    // join all elements of array into a string with spaces and commas between each element
    function arrayToStringWithSpaces(array) {
      return array.join(", ");
    }
  });
});
