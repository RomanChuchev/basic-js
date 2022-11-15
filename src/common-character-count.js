const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const obj1 = {};
    const obj2 = {};
    let count = 0;
    s1.split("").map((el) => (obj1[el] ? obj1[el]++ : (obj1[el] = 1)));
    s2.split("").map((el) => (obj2[el] ? obj2[el]++ : (obj2[el] = 1)));

    for (let key in obj1) {
        const max = isNaN(Math.min(obj1[key], obj2[key]))
            ? 0
            : Math.min(obj1[key], obj2[key]);
        count += max;
    }
    return count;
}
module.exports = {
    getCommonCharacterCount,
};
