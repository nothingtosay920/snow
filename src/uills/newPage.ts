const rounding = (num: number) => {
  if (Math.trunc(num) < num) {
    return Math.trunc(num) + 1
  }
    return num 
}
export type pageObj = {
  id: number,
  list: any[]
}
export const newPageList = 
  (arr: any[] | undefined, page: number, groupsItemNum: number = 30) => {
    if (!arr?.length) return {}
    return {list: arr.slice(0, groupsItemNum * (page + 1)), pages: rounding(arr.length / groupsItemNum)}
  }
