"use strict";
exports.__esModule = true;
exports.usePageList = void 0;
var rounding = function (num) {
    if (Math.trunc(num) < num) {
        return Math.trunc(num) + 1;
    }
    return num;
};
var getIistNums = function (arr, page, options) { return arr.slice(0, (page + 1) * options.groupsItemNum); };
var getItemsNums = function (groupsItemNum, groupsNums) { return rounding(groupsItemNum / groupsNums); };
var addObjList = function (arr, options) {
    var res = [];
    var i = 0;
    var itemNums = getItemsNums(options.groupsItemNum, options.groupsNums);
    while (i < rounding(arr.length / options.groupsItemNum)) {
        var obj = {};
        var array = arr.slice(options.groupsItemNum * i, options.groupsItemNum * (i + 1));
        if (!array.length)
            return res;
        var li = [];
        for (var j = 0; j < options.groupsNums; j++) {
            if (array.slice(itemNums * j, itemNums * (j + 1)).length) {
                li.push(array.slice(itemNums * j, itemNums * (j + 1)));
            }
        }
        obj['id'] = i;
        obj['list'] = li;
        res.push(obj);
        i++;
    }
    return res;
};
var transFromPageList = function (arr, options) {
    if (!arr)
        return [];
    return addObjList(arr, options);
};
var usePageList = function (arr, page, options) {
    if (options === void 0) { options = { groupsItemNum: 100, groupsNums: 20 }; }
    if (!arr)
        return [];
    var listNums = getIistNums(arr, page, options);
    return transFromPageList(listNums, options);
};
exports.usePageList = usePageList;
console.log(usePageList([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,81,2,3,4,5,6,7,81,2,3,4,5,6,7,81,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8], 0));
console.log([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,81,2,3,4,5,6,7,81,2,3,4,5,6,7,81,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8].length);
