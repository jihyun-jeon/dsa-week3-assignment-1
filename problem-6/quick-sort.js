const exchange = (list, a, b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a, b) => a < b;

const shuffle = (array) => {
  let randomIndex;

  for (let i = array.length; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * i);
    i--;

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
};

const partition = (array, lo, hi) => {
  let left = lo + 1;
  let right = hi;

  const pivot = array[lo];

  while (true) {
    while (less(array[left], pivot)) {
      if (left === hi) {
        break;
      }

      left++;
    }

    while (less(pivot, array[right])) {
      if (right === lo) {
        break;
      }

      right--;
    }

    if (left >= right) {
      break;
    }

    exchange(array, left, right);
  }

  exchange(array, lo, right);
  return right;
};

const sort = (array, lo, hi) => {
  if (lo >= hi) {
    return;
  }

  const j = partition(array, lo, hi);
  sort(array, lo, j - 1);
  sort(array, j + 1, hi);
};

const quickSort = (array) => {
  shuffle(array);
  sort(array, 0, array.length - 1);
};

module.exports = {
  quickSort,
};
