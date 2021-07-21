import React from 'react';
import { setNumFormat } from '../helpers/utilities';

const CostAccordionHeader = ({ total, tag: Tag, children }) => {
  const formatted = setNumFormat(total, 'currency', { currency: 'USD' });
  return (
    <div className="d-flex justify-content-between">
      <Tag>{ children }</Tag>
      <Tag>Total cost: { formatted }</Tag>
    </div>
  );
}

export default CostAccordionHeader;
