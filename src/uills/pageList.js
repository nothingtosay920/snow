"use strict";
// const rounding = (num: number) => {
//   if (Math.trunc(num) < num) {
//     return Math.trunc(num) + 1
//   }
//     return num 
// }
exports.__esModule = true;
exports.usePageList = void 0;
// const getGroupLength = (arr: any[] | undefined, groupsItemNum: number) => {
//   if (!arr) return 0
//   return rounding(arr.length / groupsItemNum)
// }
var transFromPageList = function (arr, page, groupsItemNum) {
    if (page === void 0) { page = 0; }
    if (!arr)
        return [];
    var res = [];
    console.log((page + 1) * groupsItemNum);
    var obj = {};
    var list = arr.slice(0, (page + 1) * groupsItemNum);
    // for (var i = 0; i < (page + 1) * groupsItemNum / 20; i++) {
    //     res.push(list.slice(20 * i, 20 * (i + 1)));
    // }
    let i = 0
    while (i < arr.length) {
        res.push(list.slice(i, Math.min(i+20, arr.length)))
        i += 20
    }
    obj['pageNums'] = arr.length / groupsItemNum;
    obj['arr'] = res;
    obj['id'] = page;
    // arr.slice(0, page * groupsItemNum + 1)
    return obj;
};
exports.usePageList = function (arr, page, groupsItemNum) {
    if (groupsItemNum === void 0) { groupsItemNum = 100; }
    return transFromPageList(arr, page, groupsItemNum);
};
console.log(exports.usePageList([1, 2, 3, 4, 5, 6, 7, 8,
     1, 2, 3, 4, 5, 6, 7, 8, 
     1, 2, 3, 4, 5, 6, 7, 8,
      1, 2, 3, 4, 5, 6, 7, 81,
       2, 3, 4, 5, 6, 7, 81, 2,
        3, 4, 5, 6, 7, 81, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8], 0));

// 0 19
// 20 39
// 40 59
// 80 99
//