import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget aboud it!</h4>
        </header>
        <main>
          <Route path='exact/' >
            <FeelingForm />
          </Route>
          <Route path='/UnderstandingForm' exact>
            <UnderstandingForm />
          </Route>
          <Route path='/SupportForm' exact>
            <SupportForm />
          </Route>
          <Route path='/CommentsForm' exact>
            <CommentsForm />
            <Route path='/Review' exact>
              <Review />
            </Route>
            <Route path='/ThankYou' exact>
              <ThankYou />
            </Route>
          </Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
