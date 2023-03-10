import * as React from 'react';
import Header from '../components/layout/header';
import Layout from '../components/layout/layout';
import { pageContainer } from '../styles/layout.module.css';


// Step 2: Define your component
const IndexPage = () => {
  return ( 
    <div className={ pageContainer }>
      <Header />
      <Layout>
        <div>
        <p class="code-text">Hello, my name is</p>
        <h2 class="primary-header">Christien Kelly.</h2>
        <h2 class="secondary-header">I build things with code.</h2>
        <p>I’m a software engineer specializing in building (and occasionally designing) 
        exceptional digital experiences. Currently, I’m focused on building accessible, 
        human-centered products at Upstatement.</p>
        <button class="code-button">Read my articles!</button>
        </div>
      </Layout>
    </div>
  )
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Christien Kelly</title>;

// Step 3: Export your component
export default IndexPage;