import * as React from 'react';
import { useContext } from 'react';
import { GameContext, Spiller } from '../../AppContext';
import styled from 'styled-components';
import { ScoreControll, ScoreRule } from '../../Components/ScoreControll';
import { Button } from '../../Components/Skjema';
import useLongPress from '../../utils/useLongPress';

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

const StyledButton = styled(Button)`
    white-space: nowrap;
    margin-right: 0.6rem;
`;

function KabalRad({ spiller }: { spiller: Spiller }) {
    const context = useContext(GameContext);
    const antallSpillere = context.spillere.length;
    const scoreRule: ScoreRule = {
        maxScore: Math.floor(52 / antallSpillere),
        interval: 1,
    };
    const currentScore = spiller.score.kabal;

    const updateRest = (rest: number) =>
        context.updateScore(spiller, {
            kabal: {
                ...currentScore,
                rest: rest,
            },
        });

    const updatePass = (pass: number) =>
        context.updateScore(spiller, {
            kabal: {
                ...currentScore,
                pass: pass,
            },
        });

    const longPressProps = useLongPress(() => updatePass((currentScore?.pass ?? 0) - 2));

    const passControll = (
        <StyledButton {...longPressProps} onClick={() => updatePass((currentScore?.pass ?? 0) + 1)}>
            Pass {currentScore?.pass ?? ''}
        </StyledButton>
    );

    return (
        <ScoreControll
            setScore={updateRest}
            score={currentScore?.rest}
            navn={spiller.navn}
            antallSpillere={antallSpillere}
            scoreRule={scoreRule}
            key={spiller.navn}
            customScorer={passControll}
        />
    );
}

function Kabal() {
    const context = useContext(GameContext);

    return (
        <Style>
            <StyledUl>
                {context.spillere.map((spiller) => (
                    <KabalRad key={spiller.navn} spiller={spiller} />
                ))}
            </StyledUl>
            <Oppsummering>
                Totalt{' '}
                {context.spillere.reduce(
                    (acc, current) => acc + (current.score.kabal?.pass ?? 0) + (current.score.kabal?.rest ?? 0),
                    0
                )}{' '}
                poeng.
            </Oppsummering>
        </Style>
    );
}

export default Kabal;