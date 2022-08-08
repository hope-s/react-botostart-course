import React, { Fragment } from 'react';
import ScrollToTop from '../ScrollToTop';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
