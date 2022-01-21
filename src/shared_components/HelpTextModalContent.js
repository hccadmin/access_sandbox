import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MarkupJSON from './MarkupJSON';
import { sentenceCase } from '../helpers/utilities';


const HelpTextModalContent = ({ title, content, visible, closeModal, children }) => {
  return (
    <Modal size="lg" show={ visible } onHide={ closeModal }>
      <Modal.Header closeButton>
        <Modal.Title as="h1">{ title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          { content.map( (fragment, i) => {
              return (
                <div key={ i } role="article">
                  { fragment.heading && <h2>{ fragment.heading }</h2> }
                  <MarkupJSON
                    multiline={ Array.isArray(fragment.body) }
                    tag="p"
                  >{ fragment.body }
                  </MarkupJSON>
                </div>
              );
          })}
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

export default HelpTextModalContent;
