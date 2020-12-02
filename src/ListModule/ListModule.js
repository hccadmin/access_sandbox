import React from 'react';
import Card from 'react-bootstrap/Card';

const ListModule = ({ heading, list }) => {
  return (
    <Card>
      <Card.Header role="heading">{ heading }</Card.Header>
      <Card.Body>
        <Card.Text as="div">
        { list.length === 1 && list[0] === "" ? "No risk name" :
          <ul>
          { list.map( (item, i) => {
            return (
              <li key={ i }>{ item }</li>
            );
          })}
          </ul>
        }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ListModule;
