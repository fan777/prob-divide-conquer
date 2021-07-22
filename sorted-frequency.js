
function sortedFrequency(arr, val) {
  // get left bound
  let leftBound = getLeftBound(arr, val, 0, arr.length - 1);
  if (leftBound === -1) return leftBound;
  // get right bound
  let rightBound = getRightBound(arr, val, 0, arr.length - 1);
  return rightBound - leftBound + 1;
}

function getLeftBound(arr, val, leftIdx, rightIdx) {
  if (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[leftIdx] === val && (leftIdx === 0 || arr[leftIdx - 1] < val))
      return leftIdx;
    else {
      if (arr[midIdx] < val)
        return getLeftBound(arr, val, midIdx + 1, rightIdx)
      else if (arr[midIdx] > val)
        return getLeftBound(arr, val, leftIdx, midIdx - 1);
      else {
        if (arr[midIdx - 1] < val)
          return midIdx;
        else
          return getLeftBound(arr, val, leftIdx, midIdx);
      }
    }
  }
  return -1
}

function getRightBound(arr, val, leftIdx, rightIdx) {
  if (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[rightIdx] === val && (rightIdx === arr.length - 1 || arr[rightIdx + 1] > val))
      return rightIdx;
    else {
      if (arr[midIdx] < val)
        return getRightBound(arr, val, midIdx + 1, rightIdx);
      else if (arr[midIdx] > val)
        return getRightBound(arr, val, leftIdx, midIdx - 1)
      else {
        if (arr[midIdx + 1] > val)
          return midIdx;
        else
          return getRightBound(arr, val, midIdx, rightIdx);
      }
    }
  }
  return -1;
}

module.exports = sortedFrequency
