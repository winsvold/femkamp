import * as React from 'react';
import { useContext } from 'react';
import { GameContext } from '../../AppContext';
import styled, { keyframes } from 'styled-components/macro';

const StyledOl = styled.ol`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
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
    margin: 0.5rem 0;
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

function GameOver() {
    const context = useContext(GameContext);

    const score = context.spillere
        .map((spiller) => ({
            name: spiller.navn,
            totalScore:
                (spiller.score.pass ?? 0) +
                (spiller.score.kløver ?? 0) +
                (spiller.score.kabal?.pass ?? 0) +
                (spiller.score.kabal?.rest ?? 0) +
                (spiller.score.dronning ?? 0) -
                (spiller.score.grang ?? 0),
        }))
        .sort((a, b) => a.totalScore - b.totalScore);

    return (
        <StyledOl>
            {score.map((spiller, index) => (
                <StyledLi delay={0.7 + index / 4}>
                    {spiller.name}: {spiller.totalScore}
                </StyledLi>
            ))}
        </StyledOl>
    );
}

export default GameOver;
