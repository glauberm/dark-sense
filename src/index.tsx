import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import './lib/icons';
import DefaultLayout from './layouts/DefaultLayout';
import LogIndexPage from './pages/LogIndexPage';
import NotImplementedPage from './pages/NotImplementedPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<LogIndexPage />} />
          <Route path="/*" element={<NotImplementedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

const loader = document.getElementById('dsLoader');

if (loader) {
  loader.classList.add('dsLoaderHide');

  setTimeout(() => {
    loader.hidden = true;
    loader.classList.add('dsLoaderHidden');
  }, 250);
}
