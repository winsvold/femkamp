import * as React from 'react';
import { useContext, useState } from 'react';
import { GameContext } from '../../AppContext';
import styled from 'styled-components';
import { Button, Input } from '../../Components/Skjema';

const Style = styled.div``;

const StyledForm = styled.form`
    padding: 1rem;
    text-align: center;
    > * {
        margin: 0.5rem;
    }
`;

const SpillerListe = styled.ul`
    margin-top: 1rem;
    text-align: center;
    font-size: 1.6rem;
    li {
        margin: 0.5rem;
    }
`;

const UsualSuspectsStyling = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > * {
        margin: 0.2rem;
    }
`;

const usualSuspects = ['Heidi', 'Jon', 'Ida', 'Daniel', 'Edgar', 'Kari', 'Irene', 'Einar'].sort();

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
            <StyledForm onSubmit={onSubmit}>
                <Input placeholder="Navn" value={input} onChange={(e) => setInput(e.target.value)} />
                <Button>Legg til</Button>
            </StyledForm>
            <UsualSuspectsStyling>
                {usualSuspects
                    .filter((navn) => !context.spillere.map((spiller) => spiller.navn).includes(navn))
                    .map((navn) => (
                        <Button key={navn} onClick={() => context.addSpiller(navn)}>
                            {navn}
                        </Button>
                    ))}
            </UsualSuspectsStyling>
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
