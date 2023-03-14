import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import AboutUs from './pages/AboutUs';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About us" element={<AboutUs />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
