const countVowels = require("../countVowels.js");

describe("countVowels", function () {
    test("takes a valid string and returns the correct number of vowels", () => {
        expect(countVowels("hello")).toBe(2);
    });
});
