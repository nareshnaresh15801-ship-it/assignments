const initialState = { isLoggedIn: false };

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { isLoggedIn: true };

    case "LOGOUT":
      return { isLoggedIn: false };

    default:
      return state;
  }
}

export default AuthReducer;