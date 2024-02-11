"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumberCollection_1 = require("./NumberCollection");
const CharCollection_1 = require("./CharCollection");
//https://roadmap.sh
const numberCollection = new NumberCollection_1.NumberCollection([11, 1, -10, 2, 5, 6]);
const sorterNumber = new Sorter_1.Sorter(numberCollection); //  U->[-5,0,3,10]
sorterNumber.bubleSort();
console.log(sorterNumber.collection);
const charCollection = new CharCollection_1.CharCollection('AJDBSH');
const sorter = new Sorter_1.Sorter(charCollection);
sorter.bubleSort();
console.log(sorter.collection);
