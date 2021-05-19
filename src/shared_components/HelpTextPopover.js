import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const HelpTextPopover = ({ title, content, children }) => {
  return (
    <OverlayTrigger
      trigger="click"
      placement="top"
      overlay={
        <Popover>
          <Popover.Title as="h3">{ title }</Popover.Title>
          <Popover.Content>{ content }</Popover.Content>
        </Popover>
      }
    >
      <a href="#">
        { children }
      </a>
    </OverlayTrigger>
  );
}

export default HelpTextPopover;
