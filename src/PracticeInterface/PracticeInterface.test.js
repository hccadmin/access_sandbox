import React from 'react';
import { render, screen } from '@testing-library/react';
import PracticeInterface from "./PracticeInterface";

beforeEach( () => {
  const data = [];
  render(
    <PracticeInterface 
      data={ data } 
    />
  );
});

it('should display different risks depending on the cancer selection', () => {
});
