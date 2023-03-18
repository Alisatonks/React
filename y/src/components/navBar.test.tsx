import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('NavBar component', () => {
  it('Checks that there is navigation', () => {
    render(
      <HashRouter>
        <Navbar />
      </HashRouter>
    );
    expect(screen.getByRole('navigation'));
  });
});
