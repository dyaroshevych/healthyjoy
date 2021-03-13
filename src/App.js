import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

import {
  Navigation,
  Header,
  About,
  Advantages,
  Services,
  Subscription,
  ContactForm,
  ContactInfo,
  MapSection,
  Footer,
} from "./components/sections";

const App = () => (
  <Router>
    <Route path="/">
      <Navigation />
      <Header />
      <About />
      <Services />
      <Subscription />
      <ContactForm />
      <ContactInfo />
      <MapSection />
      <Footer />
    </Route>
  </Router>
);

export default App;
