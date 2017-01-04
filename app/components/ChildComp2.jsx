import React from 'react';

const ChildComp2 = ({ friends }) => (
 <div>
   <h3> Friends </h3>
      <ul>
          {friends}
      </ul>
 </div>
);

export default ChildComp2;
