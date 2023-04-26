import { hydrateRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import WrappedApp from 'App';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <HashRouter>
    <WrappedApp />
  </HashRouter>
);
