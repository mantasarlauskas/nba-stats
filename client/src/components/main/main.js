import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeadersCategory from '../leadersCategory';
import './styles.scss';

const categories = [
  {
    category: 'pointsLeaders',
    id: 'PTS',
    title: 'Points Per Game',
  },
  {
    category: 'reboundsLeaders',
    id: 'REB',
    title: 'Rebounds Per Game',
  },
  {
    category: 'assistsLeaders',
    id: 'AST',
    title: 'Assists Per Game',
  },
  {
    category: 'blocksLeaders',
    id: 'BLK',
    title: 'Blocks Per Game',
  },
  {
    category: 'stealsLeaders',
    id: 'STL',
    title: 'Steals Per Game',
  },
];

class Main extends Component {
  render() {
    const { isLoading } = this.props;
    if (!isLoading) {
      return (
        <section>
          <h2>League Leaders</h2>
          <div className={'leaders'}>
            {categories.map(category => <LeadersCategory key={category.id} {...category} />)}
          </div>
        </section>
      );
    }
    return <div>waiting</div>;
  }
}

const mapStateToProps = ({
  api: {
    isLoading, pointsLeaders, reboundsLeaders, assistsLeaders,
  },
}) => ({
  isLoading,
  pointsLeaders,
  reboundsLeaders,
  assistsLeaders,
});

export default connect(mapStateToProps)(Main);
