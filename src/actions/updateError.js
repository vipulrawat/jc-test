export const UPDATE_ERROR = 'UPDATE_ERROR';

export default function updateError(flag, error) {
  return {
    type: UPDATE_ERROR,
    payload: {
      isError: flag,
      msg: error,
    }
  }
}