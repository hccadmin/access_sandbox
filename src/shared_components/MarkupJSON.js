import React from 'react';

const MarkupJSON = ({ tag: Tag, multiline=true, children }) => {
  if (!multiline) {
    return <Tag dangerouslySetInnerHTML={ { __html: children } } />
  }
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

export default MarkupJSON;
