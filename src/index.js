import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './index.css';
import Modal from './components/Modal/Modal';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Modal />, document.getElementById('modal-root'));
registerServiceWorker();
