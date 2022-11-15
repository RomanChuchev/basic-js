const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const res = [];
    const arr = String(n)
        .split("")
        .map((n) => Number(n));
    for (let i = 0; i < arr.length; i++) {
        const curNum = [];
        curNum.push(...arr.map((el) => el));
        curNum.splice(i, 1);
        res.push(Number(curNum.join("")));
    }

    return Math.max(...res);
}
module.exports = {
    deleteDigit,
};
