const Reducer = (state, action) => {
  switch (action.type) {
      case 'SET_AETHER_RATE':
          return {
              ...state,
              aetherRate: action.payload
          };
        case 'SET_WAX_RATE':
          return {
              ...state,
              waxRate: action.payload
          };
      case 'TOGGLE_VIEW':
          return {
              ...state,
              view: !state.view
          };
      
      default:
          return state;
  }
};

export default Reducer;