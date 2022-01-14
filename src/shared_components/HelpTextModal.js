import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import HelpTextModalContent from './HelpTextModalContent';

const HelpTextModal= ({ modalTitle, modalContent, children }) => {

  const [modalVis, changeModalVis] = useState(false);

  return (
    <>
      <p className="my-4">
        <a className="forecast-tip text-success" href="#" onClick={ () => changeModalVis(true) }>
          <Badge variant="success">TIP</Badge>{ children }
        </a>
      </p>
      <HelpTextModalContent
       title={ modalTitle }
       content={ modalContent }
       visible={ modalVis }
       closeModal={ () => changeModalVis(false) }
      />
    </>
  )
}

export default HelpTextModal;
