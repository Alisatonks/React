import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from './App';

describe('App', () => {
  it('Renders my App', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello, Olya');
  });
  it('Renders error page if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('This is an error page');
  });
  it('Renders about us page', () => {
    render(
      <MemoryRouter initialEntries={['/About us']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About Us');
  });
});
