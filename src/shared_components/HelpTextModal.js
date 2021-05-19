import React, { useState }  from 'react';
import Modal from 'react-bootstrap/Modal';
import { sentenceCase, hasHTML } from '../helpers/utilities';

const HelpTextModal = ({ title, content, visible }) => {
  return (
    <Modal show={ visible }>
      <Modal.Header>
        <Modal.Title as="h3">{ title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { typeof content === "object" ? 
          Object.keys(content).map( (fragment, i) => {
            return (
              <div key={ i } role="article">
                <h3>{ sentenceCase(fragment) }</h3>
                <div>
                  { Array.isArray(content[fragment]) ?
                    content[fragment].map( (paragraph, j) => {
                      return (
                        <p key={ j } dangerouslySetInnerHTML={ { __html: content[fragment] } } />
                      );
                    })
                    : content[fragment]
                  }
                </div>
              </div>
            );
          })
          : content
        }
      </Modal.Body>
    </Modal>
  )
}

export default HelpTextModal;
