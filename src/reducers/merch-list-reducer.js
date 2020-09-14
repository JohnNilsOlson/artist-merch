export default (state = {}, action) => {
  const { name, description, medium, quantity, id } = action;
  switch (action.type) {
    case "ADD_MERCH":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          medium: medium,
          quantity: quantity,
          id: id
        }
      });
    default: 
      return state;
  }
};