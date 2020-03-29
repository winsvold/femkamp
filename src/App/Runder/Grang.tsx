import * as React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../AppContext';

function Grang() {
    const context = useContext(GameContext);

    return (
        <div>
            {context.runde.toString()}
            {JSON.stringify(context)}
        </div>
    );
}

export default Grang;
