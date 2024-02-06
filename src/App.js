// src/App.js
import React from 'react';
import LoginForm from './pages/LoginForm';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Login Form</h1>
        <LoginForm />
      </div>
    </Provider>
  );
};

export default App;
