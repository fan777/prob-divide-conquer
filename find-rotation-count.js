function findRotationCount(arr) {
  // return index of smallest number
  return getNextBlock(arr, 0, arr.length - 1)

}

function getNextBlock(arr, leftIdx, rightIdx) {
  if (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2)
    let midVal = arr[midIdx]
    // console.log(`idx: ${leftIdx}, ${midIdx}, ${rightIdx}`)
    // console.log(`val: ${leftVal}, ${midVal}, ${rightVal}`)
    if (arr[leftIdx] < arr[rightIdx])
      return leftIdx;
    else {
      if (midVal < arr[rightIdx])
        return getNextBlock(arr, leftIdx, midIdx)
      else if (midVal > arr[leftIdx])
        return getNextBlock(arr, midIdx, rightIdx)
    }
  }
  return rightIdx;
}

// findRotationCount([15, 18, 2, 3, 6, 12])
// findRotationCount([4, 98, 100, 1, 2])
module.exports = findRotationCount