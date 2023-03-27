import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import AboutUs from './pages/AboutUs';
import FormPage from './pages/FormPage';

export class App extends React.PureComponent {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About us" element={<AboutUs />} />
        <Route path="/Form Page" element={<FormPage key="formPageKey" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    );
  }
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
