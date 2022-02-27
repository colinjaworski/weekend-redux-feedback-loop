import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

function App() {

  return (
    <Router>
      <div className='App'
      // style={{ backgroundImage: "url(images/IMG-2008.jpg)" }}
      >

        <main>
          <Route path='/' exact>
            <Feeling />
          </Route>
          <Route path='/Understanding' exact>
            <Understanding />
          </Route>
          <Route path='/Support' exact>
            <Support />
          </Route>
          <Route path='/Comments' exact>
            <Comments />
          </Route>
          <Route path='/Review' exact>
            <Review />
          </Route>
          <Route path='/ThankYou' exact>
            <ThankYou />
          </Route>
          <Route path='/Admin' exact>
            <Admin />
          </Route >
        </main>
      </div>
    </Router>
  );
}

export default App;
