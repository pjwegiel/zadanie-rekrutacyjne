/* eslint-disable react/jsx-indent */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout } from './components/Layout';

const App = () => (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);
export default withRouter(App);
