import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

const LeadersCategory = ({ data, id, title }) => {
  const { rowSet, headers } = data;
  const categoryIndex = headers.indexOf(id);
  return (
    <div className={'leaders-category'}>
      <div className={'leaders-category__title'}>
        {title}
      </div>
      {rowSet.slice(0, 5).map((row, index) => (
        <div key={row[0]} className={'leaders-category__row'}>
          <div className={'leaders-category__row__number'}>
            {`${index + 1}.`}
          </div>
          <div className={'leaders-category__row__player'}>
            {row[2]}
            <span className={'leaders-category__row__team'}>
              {row[3]}
            </span>
          </div>
          <div className={'leaders-category__row__value'}>
            {row[categoryIndex]}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ api }, { category }) => ({
  data: api[category],
});

export default connect(mapStateToProps)(LeadersCategory);
