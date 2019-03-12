const express = require('express');
const axios = require('axios');
const app = express();

const getLeagueLeaders = (category) => {
  return 'https://stats.nba.com/stats/leagueleaders?ActiveFlag=&'
    + `LeagueID=00&PerMode=PerGame&Scope=S&Season=2018-19&SeasonType=Regular+Season&StatCategory=${category}`;
};

const sendRequest = async (func, category) => {
  try {
    const { data: { resultSet } } = await axios(func(category));
    return resultSet;
  } catch (error) {
    console.log(Object.keys(error), error.message);
  }
};

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/pointsleaders', async (req, res) => {
  const data = await sendRequest(getLeagueLeaders, 'PTS');
  res.send(data);
});

app.get('/reboundsleaders', async (req, res) => {
  const data = await sendRequest(getLeagueLeaders, 'REB');
  res.send(data);
});

app.get('/assistsleaders', async (req, res) => {
  const data = await sendRequest(getLeagueLeaders, 'AST');
  res.send(data);
});

app.get('/blocksleaders', async (req, res) => {
  const data = await sendRequest(getLeagueLeaders, 'BLK');
  res.send(data);
});

app.get('/stealsleaders', async (req, res) => {
  const data = await sendRequest(getLeagueLeaders, 'STL');
  res.send(data);
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
