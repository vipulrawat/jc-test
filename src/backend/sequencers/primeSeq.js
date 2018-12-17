function isPrime(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function* primeSeq() {
  let num = 2; // first prime always
  while (true) {
    if (isPrime(num)) {
      yield num;
    }
    num += 1;
  }
}

export default primeSeq;
