import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });
});