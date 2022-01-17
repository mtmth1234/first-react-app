import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  message?: string;
  name?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message, name }) => {
  return (
    <div>
      {message}. {name}
    </div>
  );
};

App.defaultProps = {
  message: 'Hello, defaultProps!',
  name: 'default name',
};

export default App;
