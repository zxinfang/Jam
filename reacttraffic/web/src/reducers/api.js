export default (state = {}, { type, payload }) => {
  switch (type) {
    case "SAVE_API":
      return { ...state, API: payload };
    case "SAVE_ClassList":
      return { ...state, classList: payload };
    default:
      return state;
  }
};
