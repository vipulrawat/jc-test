function* rangeSeq(start, step) {
  if (!start || !step)
    throw new Error('Range requires two arguments');
  let a = start;
  while (true) {
    yield a;
    a += step;
  }
}

export default rangeSeq;
