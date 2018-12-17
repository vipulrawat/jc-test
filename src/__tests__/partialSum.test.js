/* eslint no-unused-expressions: 0 */
import partialSum from '../backend/sequencers/partialSumSeq';

describe('partialSum sequence', () => {
  it('should generate first five correct partialSum numbers', () => {
    const gen = partialSum(1, 3, 7, 2, 0);
    const expected = [1, 4, 11, 13, 13];
    for (let i = 0; i < 5; i += 1){
      let num = gen.next().value;
      expect(num).toBe(expected[i]);
    }
  });
  
  it('should throw error on when done: true', () => {
    const gen = partialSum(1,2,3);
    // expected outcome: [1, 3, 6, ERROR]
    let num = gen.next().value; //eslint-disable-line
    num = gen.next().value; // 2
    num = gen.next().value; // 6
    expect(() => { gen.next().value }).toThrow(); // ERROR
  });
});
