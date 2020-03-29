import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components/macro';
import { GameContext } from '../../AppContext';
import { ScoreControll } from '../../Component/ScoreControll';

const Style = styled.div`
    margin: 2rem 0;
`;

const StyledUl = styled.ul`
    max-width: 100vw;
`;

const Oppsummering = styled.div`
    background-color: #0004;
    padding: 1rem;
    margin: 0.1rem;
    text-align: center;
`;

function Pass() {
    const context = useContext(GameContext);

    return (
        <Style>
            <StyledUl>
                {context.spillere.map((spiller) => (
                    <ScoreControll
                        setScore={(score) => context.updateScore(spiller, { pass: score })}
                        score={spiller.score.pass}
                        navn={spiller.navn}
                    />
                ))}
            </StyledUl>
            <Oppsummering>
                Totalt {context.spillere.reduce((acc, current) => acc + (current.score.pass ?? 0), 0)} poeng
            </Oppsummering>
        </Style>
    );
}

export default Pass;
