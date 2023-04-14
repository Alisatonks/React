import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Home from './pages/Home';
import Error from './pages/Error';
import AboutUs from './pages/AboutUs';
import FormPage from './pages/FormPage';
import Header from './components/Header';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About us" element={<AboutUs />} />
      <Route path="/Form Page" element={<FormPage key="formPageKey" />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <App />
      </HashRouter>
    </Provider>
  );
}
