"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharCollection = void 0;
class CharCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const char = this.data.split('');
        const leftChar = char[leftIndex];
        char[leftIndex] = char[rightIndex];
        char[rightIndex] = leftChar;
        this.data = char.join('');
    }
}
exports.CharCollection = CharCollection;
