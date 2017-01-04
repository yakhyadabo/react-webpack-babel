import React from 'react';

const ChildComp1= ({ firstname, lastname }) => (
  <h1>{firstname} {lastname}</h1>
);

ChildComp1.propTypes = {
  firstname: React.PropTypes.string.isRequired,
  lastname: React.PropTypes.string.isRequired
};

export default ChildComp1;
