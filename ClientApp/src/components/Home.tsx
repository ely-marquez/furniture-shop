import * as React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import SearchBar from './SearchBar';

const Home = () => (
  <div>
    <div className="home-title d-flex justify-content-between align-items-center"><h2>Eco-friendly collection</h2><i className="bi bi-sliders home-title-icon text-primary"></i></div>
    <SearchBar />
    <p>To help you get started, we've also set up:</p>
    <ul>
      <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
      <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
      <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
    </ul>
    <p>The subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
  </div>
);

export default connect()(Home);
