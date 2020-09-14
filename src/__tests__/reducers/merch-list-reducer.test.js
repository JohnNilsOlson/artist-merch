import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {

  let action;
  const currentState = {
    1: {name: "Test Name 1",
    description: "Test description",
    medium: "Test medium",
    quantity: 10,
    id: 1},
    2: {name: "Test Name 2",
    description: "Test description here",
    medium: "Test medium - acrylic",
    quantity: 60,
    id: 2},
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new merch data to masterMerchList', () => {
    const { name, description, medium, quantity, id } = currentState;
    action = {
      type: "ADD_MERCH",
      name: name,
      description: description,
      medium: medium,
      quantity: quantity,
      id: id
    };

    expect(merchListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        medium: medium,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a merch item', () => {
    action = {
      type: 'DELETE_MERCH',
      id: 1
    };
    expect(merchListReducer(currentState, action)).toEqual({
      2: {name: "Test Name 2",
      description: "Test description here",
      medium: "Test medium - acrylic",
      quantity: 60,
      id: 2}
    });
  });
  
});