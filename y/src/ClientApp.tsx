import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyRoutes from './routes';
import store from './redux/store';
import Header from './components/Header';
import './index.scss';

if (typeof window !== 'undefined') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    hydrateRoot(
      rootElement,
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <MyRoutes />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
