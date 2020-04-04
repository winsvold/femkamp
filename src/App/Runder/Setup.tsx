import * as React from 'react';
import { useContext, useState } from 'react';
import { GameContext } from '../../AppContext';
import styled from 'styled-components';
import { Button, Input } from '../../Components/Skjema';

const Style = styled.div`
    padding: 2rem 0 3rem;
    text-align: center;
`;

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    > * {
        margin: 0.5rem;
    }
    margin-bottom: 1rem;
    ${Input} {
        min-width: 0;
    }
    ${Button} {
        white-space: nowrap;
    }
`;

const SpillerListe = styled.ul`
    margin-top: 1rem;
    font-size: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
        margin: 0.5rem 1.5rem;
    }
`;

const UsualSuspectsStyling = styled.div`
    padding: 0.5rem 0;
    > * {
        margin: 0.3rem;
    }
`;

const usualSuspects = [
    'Heidi',
    'Jon',
    'Ida',
    'Daniel',
    'Edgar',
    'Kari',
    'Irene',
    'Einar',
    'Grete',
    'Liv Marit',
    'Ove',
    'Siri',
    'Håvard',
    'Øyvind',
].sort();

function Setup() {
    const context = useContext(GameContext);
    const [input, setInput] = useState('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        input && context.addSpiller(input);
        setInput('');
    };

    return (
        <Style>
            <h3>Usual suspects</h3>
            <UsualSuspectsStyling>
                {usualSuspects
                    .filter((navn) => !context.spillere.map((spiller) => spiller.navn).includes(navn))
                    .map((navn) => (
                        <Button key={navn} onClick={() => context.addSpiller(navn)}>
                            {navn}
                        </Button>
                    ))}
            </UsualSuspectsStyling>
            <StyledForm onSubmit={onSubmit}>
                <Input placeholder="Legg til spiller" value={input} onChange={(e) => setInput(e.target.value)} />
                <Button>Legg til</Button>
            </StyledForm>
            <h3>Spillere</h3>
            <SpillerListe>
                {context.spillere.map((spiller) => (
                    <li key={spiller.navn} onClick={() => context.removeSpiller(spiller)}>
                        {spiller.navn}
                    </li>
                ))}
            </SpillerListe>
        </Style>
    );
}

export default Setup;
