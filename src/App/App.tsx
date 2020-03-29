import React from 'react';
import { GameContextProvider, Runder } from '../AppContext';
import { Route, Switch, useParams } from 'react-router';
import Setup from './Runder/Setup';
import Pass from './Runder/Pass';
import Kløver from './Runder/Kløver';
import Kabal from './Runder/Kabal';
import Dronning from './Runder/Dronning';
import Grang from './Runder/Grang';
import GameOver from './Runder/GameOver';
import styled, { createGlobalStyle } from 'styled-components/macro';
import Navigation from './Navigation';

export const basePath = '/femkamp/';

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
    
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    * {
      box-sizing: border-box;
    }
 }
`;

const Style = styled.div`
    display: grid;
    height: 100vh;
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: 1fr;
`;

const StyledH1 = styled.h1`
    background-color: #0003;
    padding: 0.7rem 0.5rem;
    text-align: center;
`;

const StyledH2 = styled.h2`
    background-color: #fff1;
    padding: 0.4rem;
    text-align: center;
    font-size: 1.3rem;
    box-shadow: 0 0.5rem 0.5rem #0006;
`;

const Scrollbar = styled.div`
    overflow-x: auto;
`;

function App() {
    const runde = useParams<{ runde: string }>().runde;

    return (
        <GameContextProvider>
            <GlobalStyle />
            <Style>
                <StyledH1>Femkamp</StyledH1>
                <StyledH2>{runde}</StyledH2>
                <Scrollbar>
                    <Switch>
                        <Route path={basePath + Runder[Runder.Oppsett]} component={Setup} />
                        <Route path={basePath + Runder[Runder.Pass]} component={Pass} />
                        <Route path={basePath + Runder[Runder.Kløver]} component={Kløver} />
                        <Route path={basePath + Runder[Runder.Kabal]} component={Kabal} />
                        <Route path={basePath + Runder[Runder.Dronning]} component={Dronning} />
                        <Route path={basePath + Runder[Runder.Grang]} component={Grang} />
                        <Route path={basePath + Runder[Runder.GameOver]} component={GameOver} />
                    </Switch>
                </Scrollbar>
                <Navigation />
            </Style>
        </GameContextProvider>
    );
}

export default App;
