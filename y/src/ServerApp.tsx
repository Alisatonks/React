/* eslint-disable import/prefer-default-export */
import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import MyRoutes from './routes';
import store from './redux/store.js';
import Header from './components/Header';
import './index.scss';

export function render(url: string, opts?: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <div>
            <Header />
            <MyRoutes />
          </div>
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
  const preloadedState = store.getState();
  return { stream, preloadedState };
}
