const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let isSwapped = false;

    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
      // 이미 정렬이 다 되있어서 이중 for문을 돈 적이 없다면, isSwapped는 false
      // => 때문에 다음 i가 3일때의 for문을 돌지 않고 빨리 끝낼 수 있음
    }
  }
  return array;
};

test.each([[[5, 4, 3, 2, 1]], [[1, 2, 3, 4, 5]], [[4, 2, 1, 5, 3]]])(
  "주어진 배열을 오름차순으로 정렬한다",
  (array) => {
    bubbleSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  }
);

/**
 * i는 각 인덱스 번호 : 배열의 처음 숫자부터 다 순회하기 위해
 * 비교할 숫자는 5개인데, 두개씩 잡아서 비교하니까 n-1(4번)인 것임
 * 42끼리 비교, 21끼리 비교, 15끼리 비교, 53끼리 비교,

 * j는 몇 번 비교할 것인지 : swap하기 위해 비교할 케이스 가지수

 * i / j
 * 0 / 0~3 (4번)
 * 1 / 0~2 (3번)
 * 2 / 0~1 (2번)
 * 3 / 0 (1번)
 */
