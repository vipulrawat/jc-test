function* partialSumSeq(...numbers) {
  let i = 0;
  let sum = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    yield sum;
    i += 1;
  }
  throw new Error('Underflow: no further values');
}

export default partialSumSeq;
