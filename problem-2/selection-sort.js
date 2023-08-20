const exchange = (list, a, b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a, b) => a < b;

const findMinIndex = (list, startIndex) => {
  let min = startIndex;

  for (let j = startIndex + 1; j < list.length; j++) {
    if (less(list[j], list[min])) {
      min = j;
    }
  }

  return min;
};

const selectionSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    const minIndex = findMinIndex(list, i);

    exchange(list, i, minIndex);
  }
};

module.exports = {
  selectionSort,
};
