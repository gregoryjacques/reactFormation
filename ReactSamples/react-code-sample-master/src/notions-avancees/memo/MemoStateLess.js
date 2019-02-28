import React from 'react';

const Sample = (props) => (
  <div>
    <p>StateLess component with memoization</p>
  </div>
);

const areEqual = (prevProps, nextProps) => {
  return false;
};

export default React.memo(Sample, areEqual);
