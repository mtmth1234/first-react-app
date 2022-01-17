import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

interface AppProps {
  message?: string;
  name?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message, name }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  name: 'default name',
};

export default App;
