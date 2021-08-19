import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { sentenceCase } from '../helpers/utilities';

const HelpTextModal = ({ title, content, visible, closeModal, children }) => {
  return (
    <Modal size="lg" show={ visible } onHide={ closeModal }>
      <Modal.Header closeButton>
        <Modal.Title as="h3">{ title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          { typeof content === "object" ? 
            Object.keys(content).map( (fragment, i) => {
              return (
                <div key={ i } role="article">
                  <h4>{ sentenceCase(fragment) }</h4>
                    { Array.isArray(content[fragment]) ?
                      content[fragment].map( (paragraph, j) => {
                        return (
                          <p key={ j } dangerouslySetInnerHTML={ { __html: paragraph } } />
                        );
                      })
                      : content[fragment]
                    }
                </div>
              );
            })
            : content
          }
          { children }
        </>
        <Button 
          className="float-right"
          onClick={ closeModal }
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  )
}

export default HelpTextModal;
