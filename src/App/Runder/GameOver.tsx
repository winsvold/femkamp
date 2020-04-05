import * as React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../AppContext';
import styled, { keyframes } from 'styled-components/macro';
import { Button } from '../../Components/Skjema';
import ScoreTable from '../../Components/ScoreTable';

const StyledOl = styled.ol`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 4rem;
`;

const winnerAnimation = keyframes`
  from {
    transform: scale(10) rotate(15deg);
  }
  50% {
    transform: scale(.7);
  }
`;

const loserAnimations = keyframes`
  from {
    transform: translateY(-3rem);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  60% {
    transform: translateY(.5rem);
  }
`;

const StyledLi = styled.li<{ delay: number }>`
    padding: 0.2rem 0;
    &:first-child {
        animation: ${winnerAnimation} 0.5s both;
        font-weight: bold;
        font-size: 5rem;
    }
    &:not(:first-child) {
        animation: ${loserAnimations} 0.2s ${(props) => props.delay}s both;
        font-size: 1.5rem;
    }
`;

const StyledButton = styled(Button)<{ delay: number }>`
    margin: 2rem 0;
    padding: 0.5rem 2rem;
    animation: ${loserAnimations} 0.4s ${(props) => props.delay}s both;
`;

function GameOver() {
    const context = useContext(GameContext);
    const sortertEtterTotalScore = context.spillere.sort((a, b) => a.score.total - b.score.total);

    return (
        <StyledOl>
            {sortertEtterTotalScore.map((spiller, index) => (
                <StyledLi delay={0.7 + index / 4} key={index}>
                    {spiller.navn}: {spiller.score.total}
                </StyledLi>
            ))}
            <StyledButton delay={context.spillere.length * 0.3 + 0.7} onClick={() => context.lagreOgStartPåNytt()}>
                Lagre og start nytt spill
            </StyledButton>
            <ScoreTable spillere={sortertEtterTotalScore} />
        </StyledOl>
    );
}

export default GameOver;
