function calculateFact(num) {
  if (num === 0) {
    return 1;
  }
  return num * calculateFact(num - 1);
}

function* factorialSeq() {
  let a = 0;
  while (true) {
    yield calculateFact(a);
    a += 1;
  }
}

export default factorialSeq;
