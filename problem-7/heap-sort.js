const exchange = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
};

const less = (a, b) => a < b;

const sink = (array, i, N) => {
  while (2 * i <= N) {
    let j = 2 * i;
    if (j < N && less(array[j], array[j + 1])) {
      j++;
    }

    if (!less(array[i], array[j])) {
      break;
    }

    exchange(array, i, j);
    i = j;
  }
};

const heapSort = (array) => {
  let N = array.length - 1;

  for (let i = Math.floor(N / 2); i >= 1; i--) {
    sink(array, i, N);
  }

  while (N > 1) {
    exchange(array, 1, N);
    N--;
    sink(array, 1, N);
  }
};

module.exports = {
  heapSort,
};
