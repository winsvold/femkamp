import React from 'react';
import { GameContextProvider, Runder } from '../AppContext';
import { Route, Switch } from 'react-router';
import Setup from './Runder/Setup';
import Pass from './Runder/Pass';
import Kløver from './Runder/Kløver';
import Kabal from './Runder/Kabal';
import Dronning from './Runder/Dronning';
import Grang from './Runder/Grang';
import GameOver from './Runder/GameOver';
import styled, { createGlobalStyle } from 'styled-components/macro';
import Navigation from './Navigation';

export const basePath = '/';

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #555;
    color: lightgoldenrodyellow;
    height: 100vh;
    font-size: calc(100% + 1vmin);
    *:focus {
      filter: drop-shadow(0 0 .2rem yellow);
      outline: none;
    }
 }
`;

const Style = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
`;

const StyledH1 = styled.h1`
    background-color: #0003;
    padding: 0.5rem;
    text-align: center;
`;

function App() {
    return (
        <GameContextProvider>
            <GlobalStyle />
            <Style>
                <StyledH1>Femkamp</StyledH1>
                <Switch>
                    <Route path={basePath + Runder[Runder.Setup]} component={Setup} />
                    <Route path={basePath + Runder[Runder.Pass]} component={Pass} />
                    <Route path={basePath + Runder[Runder.Kløver]} component={Kløver} />
                    <Route path={basePath + Runder[Runder.Kabal]} component={Kabal} />
                    <Route path={basePath + Runder[Runder.Dronning]} component={Dronning} />
                    <Route path={basePath + Runder[Runder.Grang]} component={Grang} />
                    <Route path={basePath + Runder[Runder.GameOver]} component={GameOver} />
                </Switch>
                <Navigation />
            </Style>
        </GameContextProvider>
    );
}

export default App;
