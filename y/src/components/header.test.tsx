import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import { WrappedApp } from '../App';
import 'whatwg-fetch';

describe('Header component', () => {
  it('Checks that there is h1 and list', () => {
    render(
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    );
    expect(
      screen.findByRole('heading', {
        level: 1,
      })
    );
    expect(screen.getByRole('list'));
  });
});
