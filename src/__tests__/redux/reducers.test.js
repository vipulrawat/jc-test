import { UPDATE_SEQ } from '../../actions/updateSequence';
import updateSequence from '../../actions/updateSequence'
import updateResult, { UPDATE_RESULT } from '../../actions/updateResult';
import updateArguments, { UPDATE_ARGS } from '../../actions/updateArgs';
import updateError, { UPDATE_ERROR } from '../../actions/updateError';

describe('actions', () => {
  it('should create an action to change the sequence', () => {
    const sequence = 'factorial'
    const expectedAction = {
      type: UPDATE_SEQ,
      payload: {
        sequence
      }
    };
    expect(updateSequence(sequence)).toEqual(expectedAction);
  });
  it('should create an action to change the sequence', () => {
    const sequence = 'range'
    const expectedAction = {
      type: UPDATE_SEQ,
      payload: {
        sequence
      }
    };
    expect(updateSequence(sequence)).toEqual(expectedAction);
  });
  it('should create an action to change the result', () => {
    const number = 122;
    const expectedAction = {
      type: UPDATE_RESULT,
      payload: {
        number
      }
    };
    expect(updateResult(number)).toEqual(expectedAction);
  });
  it('should create an action to change the arguments', () => {
    const argsArray = [2,4,6];
    const expectedAction = {
      type: UPDATE_ARGS,
      payload: {
        argsArray
      }
    };
    expect(updateArguments(argsArray)).toEqual(expectedAction);
  });
  it('should create an action to change the error', () => {
    const error = 'Error test';
    const expectedAction = {
      type: UPDATE_ERROR,
      payload: {
        isError: true,
        msg: error,
      }
    };
    expect(updateError(true, error)).toEqual(expectedAction);
  });
})
