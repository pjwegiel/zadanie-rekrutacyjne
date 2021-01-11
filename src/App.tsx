import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {withRouter} from 'react-router';

import {Layout} from './components/Layout';


function App() {
  return (
    <BrowserRouter>
      <Layout />
      {/* <Navbar />
      <List /> */}
    </BrowserRouter>
  );
}

export default withRouter(App);
