import React from 'react';
import CostAccordion from './CostAccordion';

const LevelsCostAccordion = ({ combined, individual, costType, labels, levels }) => {
  return individual.length > 0 && (
    <>
      <h2>Combined levels</h2>
      <CostAccordion
        costs={ combined}
        costType={ costType }
        labels={ labels }
      />
      <h2>Individual levels</h2>
      { individual.map( (ind, i) => {
        return (
          <div key={ i }>
            <CostAccordion
              costs={ ind }
              costType={ costType }
              labels={ labels }
            >{ `Level ${ i + 1 } costs (${ levels[i] }%)` }
            </CostAccordion>
          </div>
        );
      })}
    </>
  );
}

export default LevelsCostAccordion;
