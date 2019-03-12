const initialState = {
  pointsLeaders: {},
  reboundsLeaders: {},
  assistsLeaders: {},
  blocksLeaders: {},
  stealsLeaders: {},
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case 'SET_POINTS_LEADERS':
      return {
        ...state,
        pointsLeaders: action.payload,
      };
    case 'SET_REBOUNDS_LEADERS':
      return {
        ...state,
        reboundsLeaders: action.payload,
      };
    case 'SET_ASSISTS_LEADERS':
      return {
        ...state,
        assistsLeaders: action.payload,
      };
    case 'SET_STEALS_LEADERS':
      return {
        ...state,
        stealsLeaders: action.payload,
      };
    case 'SET_BLOCKS_LEADERS':
      return {
        ...state,
        blocksLeaders: action.payload,
      };
    default:
      return state;
  }
};
