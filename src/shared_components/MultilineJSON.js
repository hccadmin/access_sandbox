import React from 'react';

const MultilineJSON = ({ tag: Tag, children }) => {
  return (
    <>
      { React.Children.map( children, (child, i) => {
        return (
          <Tag key={ i } dangerouslySetInnerHTML={ { __html: child } } />
        );
      })}
    </>
  );
}

export default MultilineJSON;
