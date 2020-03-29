import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import App, { basePath } from './App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Route path={`${basePath}:runde`} component={App} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
