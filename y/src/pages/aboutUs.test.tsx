import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import AboutUs from './AboutUs';

describe('Error page component', () => {
  it('There is h1 with content', () => {
    render(
      <HashRouter>
        <AboutUs />
      </HashRouter>
    );
    expect(screen.getByText('This is About us Page')).toBeInTheDocument();
  });
});
