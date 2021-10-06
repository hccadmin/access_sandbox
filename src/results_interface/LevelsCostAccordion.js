import React from 'react';
import CostAccordion from './CostAccordion';
import CostAccordionHeader from './CostAccordionHeader';

const LevelsCostAccordion = ({ combined, individual, costType, labels, levels }) => {
  return individual.length > 0 && (
    <>
      <CostAccordionHeader tag="h3" total={ combined.grandTotal } className="level-header">
        Combined levels
      </CostAccordionHeader>
      <CostAccordion
        costs={ combined.individual }
        costType={ costType }
        labels={ labels }
      />
      <div className="level-header mt-5">
        <h3>Individual levels</h3>
      </div>
      { individual.map( (ind, i) => {
        return (
          <div key={ i }>
            <CostAccordionHeader tag="h4" total={ ind.grandTotal } className="ind-level mt-3">
              { `Level ${ i + 1 } costs (${ levels[i] }%)` }
            </CostAccordionHeader>
            <CostAccordion
              costs={ ind.individual }
              costType={ costType }
              labels={ labels }
            />
          </div>
        );
      })}
    </>
  );
}

export default LevelsCostAccordion;
