"use strict";
exports.__esModule = true;
exports.usePageList = void 0;
var rounding = function (num) {
    if (Math.trunc(num) < num) {
        return Math.trunc(num) + 1;
    }
    return num;
};
var usePageList = function (arr, page, groupsItemNum) {
    if (groupsItemNum === void 0) { groupsItemNum = 30; }
    if (!(arr === null || arr === void 0 ? void 0 : arr.length))
        return {};
    return { list: arr.slice(0, groupsItemNum * page), pageLength: rounding(arr.length / groupsItemNum) };
};
exports.usePageList = usePageList;
