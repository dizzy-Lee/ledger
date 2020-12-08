import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = ({income, outcome}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Keep记账</h5>
        <p className="card-text">收入{income} 支出{outcome}</p>
      </div>
    </div>
  )
}

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
}

export default TotalPrice;