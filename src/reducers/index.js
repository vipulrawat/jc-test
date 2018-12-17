import { UPDATE_ARGS } from '../actions/updateArgs';
import { UPDATE_ERROR } from '../actions/updateError';
import { UPDATE_RESULT } from '../actions/updateResult';
import { UPDATE_SEQ } from '../actions/updateSequence';

export default function reducer(state, { type, payload }) {
  switch(type) {
    case UPDATE_SEQ:
      return {
        ...state,
        sequence: payload.sequence,
      }
    case UPDATE_RESULT:
      return {
        ...state,
        number: payload.number,
      }
    case UPDATE_ARGS:
      return {
        ...state,
        argsArray: [...payload.argsArray],
      }
    case UPDATE_ERROR:
      return {
        ...state,
        error: {...payload},
      }
    default:
      return state;
  }
}