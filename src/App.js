import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Tool from './Tool';
import About from './static_content_components/About';
import References from './static_content_components/References';
import Assumptions from './static_content_components/Assumptions';
import Layout from './shared_components/Layout';
import Header from './shared_components/Header';
import Content from './shared_components/Content';

const App = () => {

  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={ <Content /> }>
          <Route index element={ <Tool /> } />
          <Route path="about" element={ <About /> } />
          <Route path="references" element={ <References /> } />
          <Route path="assumptions" element={ <Assumptions /> } />
        </Route>
      </Routes>
      <Outlet />
    </Layout>
  );
}

export default App;
