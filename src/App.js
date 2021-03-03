import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import { Navigation, Header, About, Advantages, Services, Subscription, ContactForm, ContactInfo } from './components/sections'

const App = () => (
    <Router>
        <Route path='/'>
            <Navigation />
            <Header />
            <About />
            <Advantages />
            <Services />
            <Subscription />
            <ContactForm />
            <ContactInfo />
        </Route>
    </Router>
);

export default App;
