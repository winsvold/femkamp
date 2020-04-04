import * as React from 'react';
import { useContext, useMemo } from 'react';
import styled from 'styled-components/macro';
import { GameContext } from '../AppContext';
import { ScoreControll, ScoreRule } from './ScoreControll';

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

interface Props {
    runde: 'pass' | 'kløver' | 'dronning' | 'grang';
}

function GenericScoreBoard(props: Props) {
    const context = useContext(GameContext);

    const scoreRule: ScoreRule = useMemo(() => {
        const maxScore = Math.floor(52 / context.spillere.length);

        switch (props.runde) {
            case 'grang':
                return { maxScore: -maxScore, interval: 1 };
            case 'dronning':
                return { maxScore: 16, interval: 4 };
            default:
                return { maxScore: maxScore, interval: 1 };
        }
    }, [props.runde, context.spillere.length]);

    return (
        <Style>
            <StyledUl>
                {context.spillere.map((spiller) => (
                    <ScoreControll
                        key={spiller.navn}
                        setScore={(score) => context.updateScore(spiller, { [props.runde]: score })}
                        score={spiller.score[props.runde]}
                        navn={spiller.navn}
                        antallSpillere={context.spillere.length}
                        scoreRule={scoreRule}
                    />
                ))}
            </StyledUl>
            <Oppsummering>
                Totalt {context.spillere.reduce((acc, current) => acc + (current.score[props.runde] ?? 0), 0)} poeng.
            </Oppsummering>
        </Style>
    );
}

export default GenericScoreBoard;
