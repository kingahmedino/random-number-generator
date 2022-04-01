//Generate a random number between 9 and 20
function getRandomNumber() {
  return Math.floor(Math.random() * (20 - 9 + 1)) + 9;
}

/* we can get the formula to scale number generated from 
a range [A, B] to [C, D] by using the function:

C( 1 - (x - A)/(B - A) + D(x - A)/(B - A))

where x is the number in the range [A, B] to be scaled to a number in the range [C, D]

we get the formula (99x - 880) / 11 from the function above for our set of ranges [9, 20] and [1, 100]
*/

function getScaledRandomNumber(randomNumber) {
  return (99 * randomNumber - 880) / 11;
}

module.exports = getRandomNumber;
module.exports = getScaledRandomNumber;
