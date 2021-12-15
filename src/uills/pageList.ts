// const rounding = (num: number) => {
//   if (Math.trunc(num) < num) {
//     return Math.trunc(num) + 1
//   }
//     return num 
// }

// const getGroupLength = (arr: any[] | undefined, groupsItemNum: number) => {
//   if (!arr) return 0
//   return rounding(arr.length / groupsItemNum)
// }
type pageListOptions = {
  page: number,
  groupsItemNum: number,
  groupsNums: number
}
const getIistNums = (options: pageListOptions) => (options.page + 1) * options.groupsItemNum
const getPageData = (arr: any[], nums: number) => arr.slice(0, nums)
const addObjList = (arr: any[], nums: number) => {
  const res = []
  for (let i = 0; i < nums / 20; i++) {
    res.push(arr.slice(20 * i, 20 * (i+1)))
  }
  return res
}

const parseObj = () => {
  
}

const transFromPageList = (arr: any[] | undefined, nums: number) => {
  if (!arr) return []
  const obj = {}
  const list = getPageData(arr, nums)
  getPageData(getPageData(arr, nums), nums)
  obj['pageNums'] = arr.length / groupsItemNum
  obj['arr'] = res
  obj['id'] = page
  // arr.slice(0, page * groupsItemNum + 1)
  return obj
}

export const usePageList = 
  (arr: any[] | undefined, options: pageListOptions) => {
    const listNums = getIistNums(options)
    return transFromPageList(arr, listNums)
  }

console.log(usePageList([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,81,2,3,4,5,6,7,81,2,3,4,5,6,7,81,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8], 0));
