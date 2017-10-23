import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Hello from './components/Ref/Hello'

const rootElement = document.getElementById('root');

ReactDOM.render(<Hello />, rootElement);