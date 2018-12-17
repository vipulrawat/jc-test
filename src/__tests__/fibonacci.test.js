/* eslint no-unused-expressions: 0 */
import fibonacci from '../backend/sequencers/fibonacciSeq';
let iterations = 100;

describe('fibonacci sequence', () => {
  it('should generate first five correct fibo numbers', () => {
    const gen = fibonacci();
    const expected = [1, 1, 2, 3, 5];
    for (let i = 0; i < 5; i += 1) {
      let num = gen.next().value;
      expect(num).toBe(expected[i]);
    }
  });

  it('should generate fibonacci series upto 100 length', () => {
    const gen = fibonacci();
    for(let i = 0; i < iterations; i += 1) {
      let num = gen.next().value;
      expect(num).not.toBeNaN;
    }
  });
});
