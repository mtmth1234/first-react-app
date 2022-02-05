import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
  name?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message, name }) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  name: 'default name',
};

export default App;
