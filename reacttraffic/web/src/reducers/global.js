const initialState = { isMobile: false, isTablet: false, alert: {} };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SAVE_isMobile":
      return { ...state, isMobile: payload };
    case "SAVE_isTablet":
      return { ...state, isTablet: payload };
    case "SAVE_Alert":
      return { ...state, alert: payload };
    default:
      return state;
  }
};
