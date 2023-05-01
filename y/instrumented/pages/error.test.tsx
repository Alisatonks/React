import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import store from '../redux/store';
import Error from './Error';

describe('Error page component', () => {
  it('There is h1 with content', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Error />
        </HashRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('This is an error page');
  });
  it('There is alt in image tag on 404 page', () => {
    render(
      <Provider store={store}>
        <HashRouter>
          <Error />
        </HashRouter>
      </Provider>
    );
    expect(screen.getByAltText('404_img')).toBeInTheDocument();
  });
});
