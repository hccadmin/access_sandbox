import React, { useState, useEffect } from 'react';
import { DBQueryer } from './DBQueryer/DBQueryer';
import { CancerModel } from './models';

const App = () => {
  const [cancers, setCancers] = useState([]);

  const output = (bundle) => {
    if (!Array.isArray(bundle)) {
      return;
    }
    return bundle.map( (items, i) => {
      return (
        <ul>
          <li key={ i }>{ items.name }</li>
          { output(items.getContents()) }
        </ul>
      );
    });
  }

  useEffect( () => {
    if (cancers.length === 0) {
      DBQueryer.getAll("cancers")
        .then( (dbCancers) => {
          CancerModel.load(dbCancers);
          setCancers(CancerModel.getCancersFull());
        });
    }
  });

  return cancers.length > 0 && (
    <>
      { output(cancers) }
    </>
  );
}

export default App;
