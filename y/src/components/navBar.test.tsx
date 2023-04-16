import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import store from '../redux/store';
import Navbar from './Navbar';

describe('NavBar component', () => {
  it('Checks that there is navigation', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Navbar />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
