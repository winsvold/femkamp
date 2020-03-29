import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { basePath } from './App/App';

export interface Score {
    pass?: number;
    kløver?: number;
    kabal?: {
        pass?: number;
        rest?: number;
    };
    dronning?: number;
    grang?: number;
}

export interface Spiller {
    navn: string;
    score: Score;
}

export enum Runder {
    Oppsett,
    Pass,
    Kløver,
    Kabal,
    Dronning,
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
}

const localStorage = window.localStorage;

const localstorageSpillere = localStorage.getItem('spillere');

const initialState: GameContextI = {
    spillere: localstorageSpillere ? JSON.parse(localstorageSpillere) : [],
    runde: Runder.Oppsett,
    addSpiller: () => null,
    updateScore: () => null,
    setRunde: () => null,
    removeSpiller: () => null,
};

export const GameContext = createContext<GameContextI>(initialState);

export function GameContextProvider(props: { children: ReactNode }) {
    const runde = (useParams<{ runde: string }>().runde as unknown) as Runder;
    const history = useHistory();
    const [spillere, setSpillere] = useState<Spiller[]>(initialState.spillere);

    useEffect(() => {
        localStorage.setItem('spillere', JSON.stringify(spillere));
    }, [spillere]);

    const setRunde = (runde: Runder) => {
        history.push(`${basePath}${Runder[runde]}`);
    };

    const addSpiller = (navn: string) => {
        setSpillere((prevState) => [...prevState.filter((it) => it.navn !== navn), { navn: navn, score: {} }]);
    };

    const updateScore = (spiller: Spiller, score: Partial<Score>) => {
        setSpillere((prevState) => [
            ...prevState.filter((it) => it.navn !== spiller.navn),
            { ...spiller, score: { ...spiller.score, ...score } },
        ]);
    };

    const removeSpiller = (spiller: Spiller) => {
        setSpillere((prevState) => [...prevState.filter((it) => it.navn !== spiller.navn)]);
    };

    const sortedSpillere = spillere.sort((a, b) => (a.navn > b.navn ? 1 : -1));

    return (
        <GameContext.Provider
            value={{ setRunde, spillere: sortedSpillere, runde, addSpiller, updateScore, removeSpiller }}
        >
            {props.children}
        </GameContext.Provider>
    );
}
