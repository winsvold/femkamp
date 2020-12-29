import React, { useContext, useEffect, useRef } from 'react';
import { GameContext, Runder } from '../AppContext';
import Setup from './Runder/Setup';
import Pass from './Runder/Pass';
import Kløver from './Runder/Kløver';
import Kabal from './Runder/Kabal';
import Dame from './Runder/Dame';
import Grang from './Runder/Grang';
import GameOver from './Runder/GameOver';
import styled, { createGlobalStyle } from 'styled-components/macro';
import Navigation from './Navigation';
import Historikk from './Runder/Historikk';

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

function Runde() {
    const runde = useContext(GameContext).runde;
    switch (runde) {
        case Runder.Historikk:
            return <Historikk />;
        case Runder.NyttSpill:
            return <Setup />;
        case Runder.Pass:
            return <Pass />;
        case Runder.Kløver:
            return <Kløver />;
        case Runder.Dame:
            return <Dame />;
        case Runder.Kabal:
            return <Kabal />;
        case Runder.Grang:
            return <Grang />;
        case Runder.GameOver:
            return <GameOver />;
    }
}

function App() {
    const runde = useContext(GameContext).runde;
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.scrollTo(0, 0);
    }, [runde]);

    return (
        <Style>
            <GlobalStyle />
            <StyledH1>Femkamp</StyledH1>
            <StyledH2>{Runder[runde]}</StyledH2>
            <Scrollbar ref={ref}>
                <Runde />
            </Scrollbar>
            <Navigation />
        </Style>
    );
}

export default App;
