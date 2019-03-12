import axios from 'axios';
import {
  setPointsLeaders,
  setReboundsLeaders,
  setAssistsLeaders,
  setBlocksLeaders,
  setStealsLeaders,
  toggleLoading,
} from '../actions/api';
import {
  pointsLeaders,
  reboundsLeaders,
  assistsLeaders,
  blocksLeaders,
  stealsleaders,
} from '../endpoints';

const getLeaders = (endpoint, action) => async (dispatch) => {
  const { data } = await axios(endpoint);
  dispatch(action(data));
};

export default () => async (dispatch) => {
  await dispatch(getLeaders(pointsLeaders, setPointsLeaders));
  await dispatch(getLeaders(reboundsLeaders, setReboundsLeaders));
  await dispatch(getLeaders(assistsLeaders, setAssistsLeaders));
  await dispatch(getLeaders(blocksLeaders, setBlocksLeaders));
  await dispatch(getLeaders(stealsleaders, setStealsLeaders));
  dispatch(toggleLoading());
};
