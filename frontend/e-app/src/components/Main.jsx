 import Home from './Home';
 import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';

import {Routes as Switch, Route} from 'react-router-dom'

function Main() {
  return (
    <div>
        <Navbar/>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default Main;
