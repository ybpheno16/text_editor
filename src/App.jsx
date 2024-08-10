import React from 'react';
import { Provider } from 'react-redux';
import store from './Store.jsx';
import TextEditor from './components/TextEditor';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TextEditor />
      </div>
    </Provider>
  );
};

export default App;
