import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import App, { basePath } from './App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Runder } from './AppContext';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path={`${basePath}:runde`} component={App} />
                <Route path={''} render={() => <Redirect to={`${basePath}${Runder[Runder.Oppsett]}`} />} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
