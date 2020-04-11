import * as React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { GameContext, Runder } from '../AppContext';
import { Button } from '../Components/Skjema';

const StyledNav = styled.nav`
    background-color: #0003;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -1rem 1rem #0006;
`;

const StyledButton = styled(Button)<{ align: 'left' | 'right' }>`
    padding: 0.3rem 2rem;
    ${(props) =>
        props.align === 'right' &&
        css`
            margin-left: auto;
        `};
`;

function Navigation() {
    const context = useContext(GameContext);
    const rundeNummer = context.runde;
    const forrigeRunde = rundeNummer - 1 < 0 ? undefined : Runder[rundeNummer - 1];
    const nesteRunde = rundeNummer + 1 > Object.keys(Runder).length ? undefined : Runder[rundeNummer + 1];

    return (
        <StyledNav>
            {forrigeRunde && (
                <StyledButton align="left" onClick={() => context.setRunde(rundeNummer - 1)}>
                    {forrigeRunde}
                </StyledButton>
            )}
            {nesteRunde && (
                <StyledButton align="right" onClick={() => context.setRunde(rundeNummer + 1)}>
                    {nesteRunde}
                </StyledButton>
            )}
        </StyledNav>
    );
}

export default Navigation;
