import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import './lib/icons';
import DefaultLayout from './layouts/DefaultLayout';
import LogIndexPage from './pages/LogIndexPage';
import LogDetailPage from './pages/LogDetailPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<LogIndexPage />} />
          <Route path="/detail" element={<LogDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
