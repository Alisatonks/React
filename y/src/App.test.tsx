import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from './App';
import Header from './components/Header';

describe('App', () => {
  it('Renders my App', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Main Page');
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
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });
  it('Renders about form page', () => {
    render(
      <MemoryRouter initialEntries={['/Form Page']}>
        <Header />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Form Page');
  });
});
