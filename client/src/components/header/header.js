import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default () => (
  <header className={'header'}>
    <Link to={'/'}>
      <img className={'header__logo'} src={'/assets/img/nba-logo.svg'} alt={'NBA logo'} />
    </Link>
  </header>
);
