import * as React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../AppContext';

function Pass() {
    const context = useContext(GameContext);

    return <div>{JSON.stringify(context)}</div>;
}

export default Pass;
