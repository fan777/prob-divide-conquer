function findRotatedIndex(arr, val) {
  return getNextBlock(arr, val, 0, arr.length - 1);
}

function getNextBlock(arr, val, leftIdx, rightIdx) {
  if (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2)
    let midVal = arr[midIdx]
    // console.log(`idx: ${leftIdx}, ${midIdx}, ${rightIdx}`)
    // console.log(`val: ${leftVal}, ${midVal}, ${rightVal}`)
    if (midVal === val) {
      return midIdx
    } else if (midVal > val) {
      if (arr[leftIdx] >= val)
        return getNextBlock(arr, val, midIdx + 1, rightIdx)
      else
        return getNextBlock(arr, val, leftIdx, midIdx - 1)
    } else if (midVal < val) {
      if (arr[rightIdx] >= val)
        return getNextBlock(arr, val, midIdx + 1, rightIdx)
      else
        return getNextBlock(arr, val, leftIdx, midIdx - 1)
    }
  }
  return -1;
}

// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)
module.exports = findRotatedIndex