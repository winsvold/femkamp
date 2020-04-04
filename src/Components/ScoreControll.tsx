import * as React from 'react';
import styled, { css } from 'styled-components';
import { Button, Input } from './Skjema';
import { ReactNode } from 'react';

export type ScoreRule = {
    maxScore: number;
    interval: number;
};

interface Props {
    setScore: (score: number) => void;
    score?: number;
    navn: string;
    antallSpillere: number;
    scoreRule: ScoreRule;
    key: string;
    customScorer?: ReactNode;
}

const ScoreStyle = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;
const StyledInput = styled(Input)`
    width: 3rem;
`;
const StyledButton = styled(Button)<{ currentScore: boolean }>`
    min-width: 2.5rem;
    margin-left: 0.2rem;
    ${(props) =>
        props.currentScore &&
        css`
            box-shadow: inset 0 0 0.75rem gold;
        `}
`;

const Scroller = styled.div`
    display: inline-flex;
    overflow-x: auto;
    margin-left: 0.5rem;
`;

const StyledLi = styled.li`
    padding: 0.5rem;
    background-color: #0003;
    margin: 0.5rem.1rem;
`;

const NavnStyle = styled.div``;

export function ScoreControll(props: Props) {
    return (
        <StyledLi>
            <NavnStyle>{props.navn}</NavnStyle>
            <ScoreStyle>
                {props.customScorer}
                <StyledInput
                    type="number"
                    value={props.score}
                    onChange={(event) => props.setScore(+event.target.value)}
                />
                <Scroller>
                    {[...new Array(Math.abs(props.scoreRule.maxScore / props.scoreRule.interval) + 1)].map(
                        (it, index) => {
                            let score = index * props.scoreRule.interval;
                            if (props.scoreRule.maxScore < 0) {
                                score = -score;
                            }
                            return (
                                <StyledButton
                                    currentScore={props.score === score}
                                    key={index}
                                    onClick={() => props.setScore(score)}
                                >
                                    {score}
                                </StyledButton>
                            );
                        }
                    )}
                </Scroller>
            </ScoreStyle>
        </StyledLi>
    );
}
