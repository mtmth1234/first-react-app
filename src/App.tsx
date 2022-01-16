import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  message: string;
  name: string;
}

const App = ({ message, name }: AppProps) => {
  return (
    <div>
      {message}, {name}
    </div>
  );
};

export default App;
