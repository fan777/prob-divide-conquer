function countZeroes(arr) {
  let numOfZeroes = 0;

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];

    if (midVal === 1) {
      leftIdx = midIdx + 1;
    } else {
      numOfZeroes = arr.length - midIdx;
      rightIdx = midIdx - 1;
    }
  }
  return numOfZeroes;
}

module.exports = countZeroes