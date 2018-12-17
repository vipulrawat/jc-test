/* eslint no-unused-expressions: 0 */
import range from '../backend/sequencers/rangeSeq';
let iterations = 100;

describe('range sequence', () => {
  it('should generate first five correct range numbers', () => {
    const gen = range(1, 2);
    const expected = [1, 3, 5, 7, 9];
    for (let i = 0; i < 5; i += 1){
      let num = gen.next().value;
      expect(num).toBe(expected[i]);
    }
  });
  
  it('should generate range series upto 100 length', () => {
    const gen = range(2, -1);
    for(let i = 0; i < iterations; i += 1) {
      let num = gen.next().value;
      expect(num).not.toBeNaN;
    }
  });
});
