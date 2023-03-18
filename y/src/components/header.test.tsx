import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WrappedApp } from '../App';

describe('Header component', () => {
  it('Checks that there is h1 and list', () => {
    render(<WrappedApp />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    );
    expect(screen.getByRole('list'));
  });
});
