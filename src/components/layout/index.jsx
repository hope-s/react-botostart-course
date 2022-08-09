import React, { useRef } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { StyleSheetManager } from 'styled-components';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';
import LoadingBar from 'react-top-loading-bar';
import { useLocation } from 'react-router-dom';

import ScrollToTop from '../ScrollToTop';
import Footer from './Footer';
import Header from './Header';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function Layout({ children }) {
  const ref = useRef(null);
  const pathname = useLocation();

  React.useEffect(() => {
    ref.current.complete();
  }, [pathname]);

  return (
    <CacheProvider value={cacheRtl}>
      <StyleSheetManager stylisPlugins={[rtlPlugin]}>
        <StylesProvider jss={jss}>
          <LoadingBar
            // loaderSpeed={100}
            // waitingTime={1500}
            ref={ref}
          />
          <Header />
          <ScrollToTop />
          {children}
          <Footer />
        </StylesProvider>
      </StyleSheetManager>
    </CacheProvider>
  );
}

export default Layout;
