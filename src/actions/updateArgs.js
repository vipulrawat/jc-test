export const UPDATE_ARGS = 'UPDATE_ARGS';

export default function updateArguments(newArgs) {
  return {
    type: UPDATE_ARGS,
    payload: {
      argsArray: [...newArgs],
    }
  }
}