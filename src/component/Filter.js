import React from 'react'
import connectRedux from '../redux/connect';


const Filter = ({ updateFilter, filters}) => {
  return (
    <div>
      <span>Show: </span>
      <button onClick={(e) => updateFilter('ALL')} disabled={filters.filter === 'ALL'} style={{ marginLeft: '4px', }}>
        All
      </button>
      <button onClick={(e) => updateFilter('ACTIVE')} disabled={filters.filter === 'ACTIVE'} style={{ marginLeft: '4px', }}>
        Active
      </button>
      <button onClick={(e) => updateFilter('COMPLETED')} disabled={filters.filter === 'COMPLETED'} style={{ marginLeft: '4px', }}>
        Completed
      </button>
    </div>
  );

}



export default connectRedux(Filter);
