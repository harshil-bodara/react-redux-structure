import React from 'react';

// Header
import Header from '../layout/Header';

// Footer
import Footer from '../layout/Footer';

const Layout = ({children}) => {

  return (
    <React.Fragment>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;