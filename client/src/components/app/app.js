import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchData from '../../thunks/api';
import Main from '../main';
import Header from '../header';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    props.onLoad();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className={'page'}>
          <Switch>
            <Route path={'/'} component={Main} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetchData()),
});

export default connect(null, mapDispatchToProps)(App);
