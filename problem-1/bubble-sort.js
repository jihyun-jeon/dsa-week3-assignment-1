const exchange = (array, a, b) => {
  [array[b], array[a]] = [array[a], array[b]];
};

const less = (a, b) => a < b;

const bubbleSort = (array) => {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (less(array[j + 1], array[j])) {
        exchange(array, j, j + 1);
      }
    }
  }
};

module.exports = {
  bubbleSort,
};
