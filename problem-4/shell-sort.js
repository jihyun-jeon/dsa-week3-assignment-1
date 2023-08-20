const exchange = (list, a, b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a, b) => a < b;

const shellSort = (list) => {
  const { length } = list;

  let h = 1;
  while (h < (length / 3)) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (let i = h; i < length; i++) {
      for (let j = i; j >= 0; j = j - h) {
        if (less(list[j], list[j - h])) {
          exchange(list, j, j - h);
        } else {
          break;
        }
      }
    }

    h = Math.floor(h / 3);
  }
};

module.exports = {
  shellSort,
};
