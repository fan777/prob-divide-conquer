function findFloor(arr, val) {
  if (arr[0] > val)
    return -1;
  return (getNextBlock(arr, val, 0, arr.length - 1))
}

function getNextBlock(arr, val, leftIdx, rightIdx) {
  let midIdx = Math.floor((rightIdx + leftIdx) / 2)
  let midVal = arr[midIdx]
  if (leftIdx <= rightIdx) {
    // console.log(`idx: ${leftIdx}, ${midIdx}, ${rightIdx}`)
    // console.log(`val: ${leftVal}, ${midVal}, ${rightVal}`)
    if (midVal === val)
      return midVal

    if (midVal < val && arr[midIdx + 1] > val)
      return midVal
    else if (midVal > val)
      return getNextBlock(arr, val, leftIdx, midIdx - 1)
    else
      return getNextBlock(arr, val, midIdx + 1, rightIdx)
  }
  return midVal
}

// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5));
// console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20));
module.exports = findFloor