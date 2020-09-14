import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {

  let action;
  const merchData = {
    name: "Test Name",
    description: "Test description",
    medium: "Test medium",
    quantity: 10,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new merch data to masterMerchList', () => {
    const { name, description, medium, quantity, id } = merchData;
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

});