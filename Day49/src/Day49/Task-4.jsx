const initialState = { cartCount: 0 };

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { cartCount: state.cartCount + 1 };

    case "REMOVE_ITEM":
      return {
        cartCount: state.cartCount > 0
          ? state.cartCount - 1
          : 0
      };

    default:
      return state;
  }
}

export default CartReducer;