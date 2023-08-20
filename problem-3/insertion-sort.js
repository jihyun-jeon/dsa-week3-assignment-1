const exchange = (list, a, b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a, b) => a < b;

const insertionSort = (list) => {
  const { length } = list;

  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (less(list[j], list[j - 1])) {
        exchange(list, j, j - 1);
      } else {
        break;
      }
    }
  }
};

module.exports = {
  insertionSort,
};
