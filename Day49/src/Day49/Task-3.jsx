const initialState = { theme: "light" };

function ThemeReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "light" ? "dark" : "light"
      };

    default:
      return state;
  }
}

export default ThemeReducer;