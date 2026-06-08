function countVowels(str) {
    if (typeof str !== "string" || !str) return "";

    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    console.log(`The word ${str} has ${count} vowels.`);

    return count;
}

module.exports = countVowels;

// console.log(countVowels("hello"));
