export const setPointsLeaders = data => ({
  type: 'SET_POINTS_LEADERS',
  payload: data,
});

export const setReboundsLeaders = data => ({
  type: 'SET_REBOUNDS_LEADERS',
  payload: data,
});

export const setAssistsLeaders = data => ({
  type: 'SET_ASSISTS_LEADERS',
  payload: data,
});

export const setStealsLeaders = data => ({
  type: 'SET_STEALS_LEADERS',
  payload: data,
});

export const setBlocksLeaders = data => ({
  type: 'SET_BLOCKS_LEADERS',
  payload: data,
});

export const toggleLoading = () => ({
  type: 'TOGGLE_LOADING',
});
