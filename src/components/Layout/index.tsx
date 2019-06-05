import React, { ReactElement, ComponentElement } from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';

export default function Layout(props: any): ReactElement {
  return (
    <div>
      <Header />
      <Main {...props} />
      <Footer />
    </div>
  );
}