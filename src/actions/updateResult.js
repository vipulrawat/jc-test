export const UPDATE_RESULT = 'UPDATE_RESULT';

export default function updateResult(newValue) {
  return {
    type: UPDATE_RESULT,
    payload: {
      number: newValue,
    }
  }
}