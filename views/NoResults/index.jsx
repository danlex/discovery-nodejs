import React, { PropTypes } from 'react';

const NoResults = (props) => (
  <div style={{ width: '100%', textAlign: 'center', marginBottom: '5rem' }}>
    <p className="base--h2">
      There are no results for: {props.query ? props.query.text : '' }
    </p>
    <p className={props.query.restrictedDateRange ? 'base--h3' : 'hidden'}> 
      Try setting the timeframe to 'Last 2 Months'.
    </p>
  </div>
);

NoResults.propTypes = {
  query: PropTypes.object,
};

export default NoResults;
