import { useMemo } from "react"


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

const transFromPageList = (arr: any[] | undefined, page: number = 0, groupsItemNum: number) => {
  if (!arr) return []
  const res = []
  const list = arr.slice(0, page * groupsItemNum + 1)
  for (let i = 0; i < groupsItemNum / 20; i++) {
    res.push(list.slice(20 * i, 20 * (i+1)))
    
  }
  // arr.slice(0, page * groupsItemNum + 1)
  return res
}

export const usePageList = 
  (arr: any[] | undefined, page: number, groupsItemNum: number = 100) => {
    return transFromPageList(arr, page, groupsItemNum)
  }

