# Beep Boop

#### This app censors numbers with 1, 2, or 3 in them

#### By _**Sam Cook**_

## Description

Enter a number to sensor all numbers between 0 and that number that contain a 1, 2, or 3. Because we all know those numbers are evil.

## Setup/Installation Requirements

* This website is located at https://onionator.github.io/beepBoop/index.html
* The GitHub repository is located at https://github.com/Onionator/beepBoop.git
* Open in a web browser

## Known Bugs

numbers less than 0 will not work.

## Support and contact details

If an issue is found please email WhenPotatoesFry@gmail.com

## Technologies Used

* HTML
* CSS
* JavaScript
* JQuery

1. Build a string of numbers from 0 counting up to user specified number
  * input: 5
  * output: 0, 1, 2, 3, 4, 5

2. find all numbers containing 3's and replace all numbers containing 3's with "I'm sorry Dave, I can't do that."
  * input: 0, 1, 2, 3, 4, 5
  * output: 0, 1, 2, "I'm sorry Dave, I can't do that.", 4, 5

3. find all the numbers containing 2's and replace 2's with "Boop!"
  * input: 0, 1, 2, "I'm sorry Dave, I can't do that.", 4, 5
  * output: 0, 1, "Boop!", "I'm sorry Dave, I can't do that.", 4, 5

4. find all the numbers containing 1's and replace 1's with "Beep!"
  * input: 0, 1, "Boop!", "I'm sorry Dave, I can't do that.", 4, 5
  * output: 0, "Beep!", "Boop!", "I'm sorry Dave, I can't do that.", 4, 5

5. join all elements of array into a string with spaces and commas between each element
  * input: 0, "Beep!", "Boop!", "I'm sorry Dave, I can't do that.", 4, 5
  * output: 0, "Beep!", "Boop!", "I'm sorry Dave, I can't do that.", 4, 5


### License

MIT

copright (c) **_Sam Cook_**
