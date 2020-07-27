import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = { 
    type: 'LOGIN',
    uid: 'abc123'
  };
  const state = authReducer({}, action);
  // expect(state).toEqual({ uid: action.uid });
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const state = authReducer({ uid: 'abc123' }, { type: 'LOGOUT'});
  expect(state).toEqual({});
});

test('should default type', () => {
  const initState = { uid: 'abc123' };
  const state = authReducer(initState, {});
  expect(state).toEqual(initState);
});