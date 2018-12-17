function* fibonacciSeq() {
  let first = 0;
  let second = 1;
  let sum = first + second;
  while (true) {
    yield sum;
    sum = first + second;
    first = second;
    second = sum;
  }
}

export default fibonacciSeq;
