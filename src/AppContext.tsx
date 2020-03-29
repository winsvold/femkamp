import React, { createContext, ReactNode, useState } from 'react';
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
    score?: Score;
}

export enum Runder {
    Setup,
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
    updateSpiller: (spiller: Spiller) => void;
    setRunde: (runde: Runder) => void;
    removeSpiller: (spiller: Spiller) => void;
}

const initialState: GameContextI = {
    spillere: [],
    runde: Runder.Setup,
    updateSpiller: () => null,
    setRunde: () => null,
    removeSpiller: () => null,
};

export const GameContext = createContext<GameContextI>(initialState);

export function GameContextProvider(props: { children: ReactNode }) {
    const runde = (useParams<{ runde: string }>().runde as unknown) as Runder;
    const history = useHistory();
    const [spillere, setSpillere] = useState<Spiller[]>(initialState.spillere);

    const setRunde = (runde: Runder) => {
        history.push(`${basePath}${Runder[runde]}`);
    };

    const updateSpiller = (spiller: Spiller) => {
        setSpillere((prevState) => [...prevState.filter((it) => it.navn !== spiller.navn), spiller]);
    };

    const removeSpiller = (spiller: Spiller) => {
        setSpillere((prevState) => [...prevState.filter((it) => it.navn !== spiller.navn)]);
    };

    return (
        <GameContext.Provider value={{ setRunde, spillere, runde, updateSpiller, removeSpiller }}>
            {props.children}
        </GameContext.Provider>
    );
}
