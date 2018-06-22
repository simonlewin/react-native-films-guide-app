const setFilms = (state, { films }) => {
  return {
    ...state,
    films: films,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setFilms": return setFilms(state, action);
    default: return state;
  }
};

export default reducer;