import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import './App.css';
import Application from './Conteiners/App/Application'
import { BrowserRouter as Router } from 'react-router-dom'
import Wrapper from './wrapper'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
        <Application/>
        </Wrapper>
      </Router>
    </Provider>
  );
}

export default App;
