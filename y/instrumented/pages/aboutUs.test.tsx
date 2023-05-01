import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import store from '../redux/store';
import AboutUs from './AboutUs';

describe('Error page component', () => {
  it('There is h1 with content', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <AboutUs />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByText('This is About us Page')).toBeInTheDocument();
  });
});
