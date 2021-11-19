import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const HelpTextPopover = ({ title, content, children }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Popover id={ title }>
          <Popover.Title as="h3">{ title }</Popover.Title>
          <Popover.Content>{ content }</Popover.Content>
        </Popover>
      }
    >
      <span>&nbsp;
        <a className="definition" href="#">
          { children }
        </a>
      &nbsp;</span>
    </OverlayTrigger>
  );
}

export default HelpTextPopover;
