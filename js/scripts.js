$(document).ready(function() {
  $("button").click(function() {
    //get user textInput and store only integers
    var userInput = parseInt($("input:text[name=numberInput]").val());
    console.log(userInput);

    var workingArray = createRange(userInput);
    console.log(workingArray);
    workingArray = findThrees(workingArray);
    //console.log(workingArray);


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
        console.log( three.includes(arrayOfNumbers[i].toString()));

        //console.log(three.includes(parseStr(arrayOfNumbers[i]).split("")));
        // if (arrayOfNumbers.filter(3)) {
        //   console.log("found a three")
        // }
        // if (arrayOfNumbers.every(3)) {
        //   console.log(arrayOfNumbers[i]);
        //   arrayOfNumbers[i] = "I'm sorry Dave, I can't do that."
        // } else {
        //   console.log("not a three");
        // }

      }
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
