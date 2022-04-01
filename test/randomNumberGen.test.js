const getRandomNumber = require("../randomNumberGen");
const getScaledRandomNumber = require("../randomNumberGen");

const randomNumber = getRandomNumber();

var assert = require("assert");
describe("Random number", function () {
  it("should return a scaled random number in range 1 and 100", function () {
    assert.equal(
      getScaledRandomNumber(randomNumber),
      (99 * randomNumber - 880) / 11
    );
  });
});
