export const UPDATE_SEQ = 'UPDATE_SEQUENCE';

export default function updateSequence(newSeq) {
  return {
    type: UPDATE_SEQ,
    payload: {
      sequence: newSeq,
    }
  }
}