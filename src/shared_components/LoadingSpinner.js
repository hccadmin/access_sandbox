import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Fade from 'react-bootstrap/Fade';

const LoadingSpinner = ({ showLoad }) => {
  return (
    <Fade in={ showLoad } unmountOnExit="true">
      <div className="loading-overlay">
        <Spinner 
          animation="border" 
          variant="primary" 
          bsPrefix="spinner-border position-absolute loading-spinner"
        />
      </div>
    </Fade>
  );
}

export default LoadingSpinner;
