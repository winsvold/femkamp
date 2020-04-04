import React, { createContext, ReactNode, useState } from 'react';
import { injectTotalScore } from './injectTotalScore';
import { lagreSpill } from './App/manageHistorikk';

export interface Score {
    pass: number;
    kløver: number;
    kabal: {
        pass: number;
        rest: number;
    };
    dame: number;
    grang: number;
    total: number;
}

export interface Spiller {
    navn: string;
    score: Score;
}

export enum Runder {
    Historikk,
    Oppsett,
    Pass,
    Kløver,
    Kabal,
    Dame,
    Grang,
    GameOver,
}

interface GameContextI {
    runde: Runder;
    spillere: Spiller[];
    addSpiller: (navn: string) => void;
    updateScore: (spiller: Spiller, score: Partial<Score>) => void;
    setRunde: (runde: Runder) => void;
    removeSpiller: (spiller: Spiller) => void;
    lagreOgStartPåNytt: () => void;
}

const defaultScore: Score = {
    pass: 0,
    kløver: 0,
    kabal: {
        pass: 0,
        rest: 0,
    },
    dame: 0,
    grang: 0,
    total: 0,
};

const localStorage = window.localStorage;

const localstorageSpillere = localStorage.getItem('spillere');

const initialState: GameContextI = {
    spillere: localstorageSpillere ? JSON.parse(localstorageSpillere) : [],
    runde: Runder.Oppsett,
    addSpiller: () => null,
    updateScore: () => null,
    setRunde: () => null,
    removeSpiller: () => null,
    lagreOgStartPåNytt: () => null,
};

export const GameContext = createContext<GameContextI>(initialState);

export function GameContextProvider(props: { children: ReactNode }) {
    const [runde, setRunde] = useState<Runder>(initialState.runde);
    const [spillere, setSpillere] = useState<Spiller[]>(initialState.spillere);

    const addSpiller = (navn: string) => {
        setSpillere((prevState) => [
            ...prevState.filter((it) => it.navn !== navn),
            { navn: navn, score: defaultScore },
        ]);
    };

    const updateScore = (spiller: Spiller, score: Partial<Score>) => {
        const updatedSpiller = {
            ...spiller,
            score: {
                ...spiller.score,
                ...score,
            },
        };
        setSpillere((prevState) => [...prevState.filter((it) => it.navn !== spiller.navn), updatedSpiller]);
    };

    const removeSpiller = (spiller: Spiller) => {
        setSpillere((prevState) => [...prevState.filter((it) => it.navn !== spiller.navn)]);
    };

    const spillereMedTotalScore = injectTotalScore(spillere);
    const sortedSpillere = spillereMedTotalScore.sort((a, b) => (a.navn > b.navn ? 1 : -1));

    localStorage.setItem('spillere', JSON.stringify(spillereMedTotalScore));
    const lagreOgStartPåNytt = () => {
        lagreSpill(spillereMedTotalScore);
        setSpillere([]);
        setRunde(Runder.Oppsett);
    };

    return (
        <GameContext.Provider
            value={{
                setRunde,
                spillere: sortedSpillere,
                runde,
                lagreOgStartPåNytt,
                addSpiller,
                updateScore,
                removeSpiller,
            }}
        >
            {props.children}
        </GameContext.Provider>
    );
}
