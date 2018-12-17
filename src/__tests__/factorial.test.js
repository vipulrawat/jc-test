/* eslint no-unused-expressions: 0 */
import factorial from '../backend/sequencers/factorialSeq';
let iterations = 10;

describe('Factorial sequence', () => {
  it('should generate correct factorial of 5', () => {
    const gen = factorial();
    let num;
    for(let i = 0; i < 6; i += 1) {
      num = gen.next().value;
    }
    expect(num).toBe(120)
  });
  it('should generate 10 factorials', () => {
    const gen = factorial();
    for(let i = 0; i < iterations; i += 1) {
      let num = gen.next().value;
      expect(num).not.toBeNaN;
    }
  });
});
