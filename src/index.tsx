import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { GameContextProvider } from './AppContext';

ReactDOM.render(
    <React.StrictMode>
        <GameContextProvider>
            <App />
        </GameContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
