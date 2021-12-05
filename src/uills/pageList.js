"use strict";
exports.__esModule = true;
exports.usePageList = void 0;
var map = new Map();
var getBigNum = function (num) {
    if (Math.trunc(num) < num) {
        return Math.trunc(num) + 1;
    }
    return num;
};
var transFromPageList = function (arr, page, nums) {
    if (page === void 0) { page = 0; }
    if (nums === void 0) { nums = 1; }
    if (!arr)
        return [];
    var res = [];
    var min = 0;
    var len = arr.length;
    var max = Math.min(len, nums);
    // let obj: any = {}
    for (var i = 0; i < getBigNum(len / nums); i++) {
        // obj['page' + String(i)] = arr.slice(min, max)
        res.push(arr.slice(min, max));
        min += nums;
        max = Math.min(len, nums + min);
    }
    return res[page] || [];
};
var test = [];
var usePageList = function (arr, page) {
    // map.set(name, transFromPageList(arr))
    // test.concat(transFromPageList(arr, page))
    if (transFromPageList(arr, page)) {
        test.push.apply(test, transFromPageList(arr, page));
        return test;
    }
    // return transFromPageList(arr, page)
};
exports.usePageList = usePageList;

console.log(usePageList([1,2,3,4,5], 1));
console.log(usePageList([1,2,3,4,5], 2));
console.log(usePageList([1,2,3,4,5], 3));
console.log(usePageList([1,2,3,4,5], 4));
console.log(usePageList([1,2,3,4,5], 6));
