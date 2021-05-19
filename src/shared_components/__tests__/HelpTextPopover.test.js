import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HelpTextPopover from '../HelpTextPopover';

test('Should contain a link with text passed as child', () => {
  render(<HelpTextPopover>Link text</HelpTextPopover>);
  const link = screen.getByRole('link', { name: /link text/i });
  expect(link).toBeInTheDocument();
});

test('Should not show popover if link not clicked', () => {
  render(
    <HelpTextPopover
      title="Popover title"
      content="Popover content"
    >Click me</HelpTextPopover>
  );
  expect( screen.queryByRole('tooltip') ).toBeNull();
});

test('When link clicked, should contain a popover with title and content', async() => {
  render(
    <HelpTextPopover
      title="Popover title"
      content="Popover content"
    >Click me</HelpTextPopover>
  );
  const link = screen.getByRole('link', { name: /click me/i });
  userEvent.click(link);
  const popover = await screen.findByRole('tooltip');
  expect(popover).toBeInTheDocument();
  expect( screen.getByRole('heading', { name: /popover title/i }) ).toBeInTheDocument();
  expect( screen.getByText(/popover content/i) ).toBeInTheDocument();
});
