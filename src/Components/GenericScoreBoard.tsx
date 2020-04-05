import * as React from 'react';
import { useContext, useMemo } from 'react';
import styled from 'styled-components/macro';
import { GameContext, Runder } from '../AppContext';
import { ScoreControll, ScoreRule } from './ScoreControll';
import ScoreTable from './ScoreTable';

const Style = styled.div`
    margin: 2rem 0;
`;

const StyledUl = styled.ul`
    max-width: 100vw;
`;

const Oppsummering = styled.div`
    background-color: #0004;
    padding: 1rem;
    margin: 0.1rem 0.1rem 1rem;
    text-align: center;
`;

interface Props {
    runde: 'pass' | 'kløver' | 'dame' | 'grang';
}

function GenericScoreBoard(props: Props) {
    const context = useContext(GameContext);

    const scoreRule: ScoreRule = useMemo(() => {
        const maxScore = Math.floor(52 / context.spillere.length);

        switch (props.runde) {
            case 'grang':
                return { maxScore: -maxScore, interval: 1 };
            case 'dame':
                return { maxScore: 16, interval: 4 };
            case 'kløver':
                return { maxScore: 13, interval: 1 };
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
                Totalt {context.spillere.reduce((acc, current) => acc + current.score[props.runde], 0)} poeng
            </Oppsummering>
            <ScoreTable spillere={context.spillere} />
        </Style>
    );
}

export default GenericScoreBoard;
