import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WrappedApp } from '../App';
import 'whatwg-fetch';

describe('SearchBar component', () => {
  it('Checks that there is a search button', () => {
    render(<WrappedApp />);
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
  it('Checks that there is an input', () => {
    render(<WrappedApp />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
