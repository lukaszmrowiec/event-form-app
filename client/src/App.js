import React, { Component } from 'react';
import Members from './components/Members';
import MemberForm from './components/MemberForm';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MemberForm />
          <Members />
        </div>
      </Provider>
    );
  }
}

export default App;
