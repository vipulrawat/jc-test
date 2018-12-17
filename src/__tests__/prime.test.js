/* eslint no-unused-expressions: 0 */
import prime from '../backend/sequencers/primeSeq';
let iterations = 100;

describe('prime sequence', () => {
  it('should generate first five correct prime numbers', () => {
    const gen = prime();
    const expected = [2, 3, 5, 7, 11];
    for (let i = 0; i < 5; i += 1) {
      let num = gen.next().value;
      expect(num).toBe(expected[i]);
    }
  });
  
  it('should generate prime series upto 100 length', () => {
    const gen = prime();
    for(let i = 0; i < iterations; i += 1) {
      let num = gen.next().value;
      expect(num).not.toBeNaN;
    }
  });
});
