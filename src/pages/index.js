import * as React from 'react';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Header from '../components/layout/header';
import Layout from '../components/layout/layout';
import { pageContainer } from '../styles/layout.module.css';
import RightSideBar from '../components/layout/right-sidebar';
import LeftSideBar from '../components/layout/left-sidebar';

const App = () => {
  return ( 
    <div className={ pageContainer }>
      <Header />
      <LeftSideBar />
      <RightSideBar />
      <Layout>
        <Hero />
        <About />
      </Layout>
    </div>
  )
};

export const Head = () => (
  <head>
    <title>Christien</title>
    <link rel="icon" href="svg/favicon.svg"/>
  </head>
);

export default App;