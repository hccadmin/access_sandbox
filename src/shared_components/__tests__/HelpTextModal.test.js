import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HelpTextModal from '../HelpTextModal';

test('Modal should not be visible by default', () => {
  render(<HelpTextModal visible={ false }/>);
  expect( screen.queryByRole('dialog') ).toBeNull();
});

test('Should appear when visible trigger set to "true"', async() => {
  render(<HelpTextModal visible={ true } />);
  const modal = await screen.findByRole('dialog');
  expect(modal).toBeInTheDocument();
});

test('Should show title and basic body text (string) when open', async() => {
  render(
    <HelpTextModal 
      visible={ true } 
      title="Modal title"
      content="Modal content"
    />
  );
  const title = await screen.findByRole('heading', { name: /modal title/i });
  const content = await screen.findByText(/modal content/i);
  expect(title).toBeInTheDocument();
  expect(content).toBeInTheDocument();
});

test('Should show title and complex body text (object, plain text) when open', async() => {
  const content = {
    first: "Text content for first",
    second: "Text content for second"
  }
  render(
    <HelpTextModal 
      visible={ true } 
      title="Modal title"
      content={ content }
    />
  );
  const title = await screen.findByRole('heading', { name: /modal title/i });
  const heading1 = await screen.findByRole('heading', { name: /first/i });
  const heading2 = await screen.findByRole('heading', { name: /second/i });
  [heading1, heading2].forEach( heading => expect(heading).toBeInTheDocument() );
  /*
  */
});

test('Should show title and complex body text (object, HTML) when open', async() => {
  const content = {
    first: [
      "<p>First paragraph</p>",
      "<p>Second paragraph</p>"
    ]  
  };
  render(
    <HelpTextModal 
      visible={ true } 
      title="Modal title"
      content={ content }
    />
  );
  const title = await screen.findByRole('heading', { name: /modal title/i });
  const article = await screen.findByRole('article');
  expect( within(article).getByRole('heading', { name: /first/i }) ).toBeInTheDocument();
  /*
  article.forEach( (article, i) => {
    expect(article).toContainHTML(Object.values(content)[i]);
  });
  */
});
