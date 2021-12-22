const rounding = (num: number) => {
  if (Math.trunc(num) < num) {
    return Math.trunc(num) + 1
  }
    return num 
}

type pageListOptions = {
  groupsItemNum: number,  // 全部数组中的项数之和
  groupsNums: number // 数组内对象数
}
export type pageObj = {
  id: number,
  list: any[]
}
type pageList = pageObj[]
const getIistNums = (arr: any[], page: number, groupsItemNum: number) => arr.slice(0, (page + 1) * groupsItemNum)
// const getItemsNums = (groupsItemNum: number, groupsNums: number) => rounding(groupsItemNum / groupsNums)
const addObjList = (arr: any[], groupsItemNum: number): pageList => {
  const res: pageList = []
  let i = 0
  // const itemNums = getItemsNums(options.groupsItemNum, options.groupsNums)
  while (i < rounding(arr.length / groupsItemNum) ) {
    const obj = {}
    const array = arr.slice(groupsItemNum * i, groupsItemNum * (i + 1))
    if (!array.length) return res
    // for (let j =  0; j < options.groupsNums; j++) {
    //   if (array.slice(itemNums * j, itemNums * (j + 1)).length) {
    //     li.push(array.slice( itemNums * j, itemNums * (j+1)))
    //   }
    // }
    obj['id'] = i
    obj['list'] = array
    res.push(obj as pageObj)
    i++
  }
  
  return res
}

const transFromPageList = (array: any[] | undefined, groupsItemNum: number) => {
  if (!array?.length) return []
  return addObjList(array, groupsItemNum)
}

export const usePageList = 
  (arr: any[] | undefined, page: number, groupsItemNum: number = 30) => {
    
    if (!arr?.length) return {}
    const list = getIistNums(arr, page, groupsItemNum)
    return {list: transFromPageList(list, groupsItemNum), pages: rounding(arr.length/groupsItemNum)}
  }

