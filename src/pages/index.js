import * as React from 'react';
import Intro from '../components/intro';
import Header from '../components/layout/header';
import Layout from '../components/layout/layout';
import { pageContainer } from '../styles/layout.module.css';


// Step 2: Define your component
const IndexPage = () => {
  return ( 
    <div className={ pageContainer }>
      <Header />
      <Layout>
        <Intro />
      </Layout>
    </div>
  )
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Christien Kelly</title>;

// Step 3: Export your component
export default IndexPage;