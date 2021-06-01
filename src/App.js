import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
      <Nav></Nav>
      <main>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/" component={About} />
        </Switch>
      </main>
      <Footer></Footer>
      </>
    </Router>
    
  );
}

export default App;
