const map = new Map()

const getBigNum = (num: number) => {
  if (Math.trunc(num) < num) {
    return Math.trunc(num) + 1
  }
    return num 
}

const transFromPageList = (arr: any[] | undefined, page: number = 0, nums: number = 100) => {
  if (!arr) return []
  const res: any[] = []
  let min = 0
  let len = arr.length
  let max = Math.min(len, nums)
  // let obj: any = {}
  for (let i = 0; i < getBigNum(len / nums); i++) {
    // obj['page' + String(i)] = arr.slice(min, max)
    res.push(arr.slice(min, max))
    min += nums
    max = Math.min(len, nums + min)

  }
  return res[page] || []
}

let test: any = []
export const usePageList = (arr: any[] | undefined, page: number) => {
  
  // map.set(name, transFromPageList(arr))
  // test.concat(transFromPageList(arr, page))
  if (transFromPageList(arr, page)) {
    test.push(...transFromPageList(arr, page))
    return test
  }
  // return transFromPageList(arr, page)
}
