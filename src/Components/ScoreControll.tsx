import * as React from 'react';
import styled, { css } from 'styled-components';
import { Button, Input } from './Skjema';

interface Props {
    setScore: (score: number) => void;
    score?: number;
    navn: string;
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
                <StyledInput
                    type="number"
                    value={props.score}
                    onChange={(event) => props.setScore(+event.target.value)}
                />
                <Scroller>
                    {[...new Array(26)].map((it, index) => (
                        <StyledButton
                            currentScore={props.score === index}
                            key={index}
                            onClick={() => props.setScore(index)}
                        >
                            {index}
                        </StyledButton>
                    ))}
                </Scroller>
            </ScoreStyle>
        </StyledLi>
    );
}
