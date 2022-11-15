const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    _data: [],
    getLength() {
        return this._data.length;
    },
    addLink(value) {
        this._data.push(String(value));
        return this;
    },
    removeLink(pos) {
        if (
            typeof pos !== "number" ||
            !Number.isInteger(pos) ||
            this.getLength() === 0 ||
            pos > this.getLength() ||
            pos < 1
        ) {
            this._data = [];
            throw new Error("You can't remove incorrect link!");
        }

        this._data = this._data.filter(
            (el) => this._data.indexOf(el) + 1 !== pos
        );
        return this;
    },
    reverseChain() {
        this._data.reverse();
        return this;
    },
    finishChain() {
        const chain = "( " + this._data.join(" )~~( ") + " )";
        this._data = [];
        return chain;
    },
};
// console.log(
//     chainMaker
//         .addLink(1)
//         .addLink(2)
//         .reverseChain()
//         .addLink(3)
//         .finishChain()
//         .getLength()
// ); //=>'( 1 )~~( 2 )~~( 3 )'
module.exports = {
    chainMaker,
};
