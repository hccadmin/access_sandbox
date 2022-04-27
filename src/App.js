import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Tool from './Tool';
import About from './static_content_components/About';
import References from './static_content_components/References';
import Assumptions from './static_content_components/Assumptions';
import Layout from './shared_components/Layout';
import Header from './shared_components/Header';
import Content from './shared_components/Content';
import Footer from './shared_components/Footer';
import { setNavigation } from './state/slices/navigationSlice';

const App = () => {

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect( () => { 
    //console.log(location);
    const path = /\/.+/g;
    const page = location.pathname.match(path);
    page !== null && dispatch( setNavigation({ staticPage: true }) );
  }, [location.pathname]);

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
      <Footer />
    </Layout>
  );
}

export default App;
