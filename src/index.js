import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Home from './views/Home';
//import About from './views/About';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Home />);