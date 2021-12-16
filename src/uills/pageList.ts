const rounding = (num: number) => {
  if (Math.trunc(num) < num) {
    return Math.trunc(num) + 1
  }
    return num 
}

// const getGroupLength = (arr: any[] | undefined, groupsItemNum: number) => {
//   if (!arr) return 0
//   return rounding(arr.length / groupsItemNum)
// }
type pageListOptions = {
  groupsItemNum: number,  // 全部数组中的项数之和
  groupsNums: number // 数组内对象数
}
const getIistNums = (arr: any[], page: number, options: pageListOptions) => arr.slice(0, (page + 1) * options.groupsItemNum)
const getItemsNums = (groupsItemNum: number, groupsNums: number) => rounding(groupsItemNum / groupsNums)
const addObjList = (arr: any[], options: pageListOptions) => {
  const res = []
  let i = 0
  const itemNums = getItemsNums(options.groupsItemNum, options.groupsNums)
  while (i < rounding(arr.length / options.groupsItemNum) ) {
    const obj = {}
    const array = arr.slice(options.groupsItemNum * i, options.groupsItemNum * (i + 1))
    if (!array.length) return res
    const li = []
    for (let j =  0; j < options.groupsNums; j++) {
      if (array.slice(itemNums * j, itemNums * (j + 1)).length) {
        li.push(array.slice( itemNums * j, itemNums * (j+1)))
      }
    }
    obj['id'] = i
    obj['list'] = li
    res.push(obj)
    i++
  }
  return res
}

const transFromPageList = (arr: any[] | undefined, options: pageListOptions) => {
  if (!arr) return []
  return addObjList(arr, options)
}

export const usePageList = 
  (arr: any[] | undefined, page: number, options: pageListOptions = { groupsItemNum: 100, groupsNums: 2 }) => {
    if(!arr) return []
    const listNums = getIistNums(arr, page, options)
    return transFromPageList(listNums, options)
  }

// console.log(usePageList([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,81,2,3,4,5,6,7,81,2,3,4,5,6,7,81,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8], 0));
