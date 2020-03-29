import * as React from 'react';
import styled, { css } from 'styled-components';
import { useContext } from 'react';
import { GameContext, Runder } from '../AppContext';
import { Link } from 'react-router-dom';
import { basePath } from './App';

const StyledNav = styled.nav`
    background-color: #0003;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -1rem 1rem #0006;
`;

const StyledLink = styled(Link)<{ align: 'left' | 'right' }>`
    display: block;
    padding: 1rem 2rem;
    color: lightgoldenrodyellow;
    border: solid 0.2rem #fff6;
    ${(props) =>
        props.align === 'right' &&
        css`
            margin-left: auto;
        `};
`;

function Navigation() {
    const context = useContext(GameContext);
    const rundeNummer = +Runder[context.runde];
    const forrigeRunde = rundeNummer - 1 < 0 ? undefined : Runder[rundeNummer - 1];
    const nesteRunde = rundeNummer + 1 > Object.keys(Runder).length ? undefined : Runder[rundeNummer + 1];

    return (
        <StyledNav>
            {forrigeRunde && (
                <StyledLink align="left" to={basePath + forrigeRunde}>
                    {forrigeRunde}
                </StyledLink>
            )}
            {nesteRunde && (
                <StyledLink align="right" to={basePath + nesteRunde}>
                    {nesteRunde}
                </StyledLink>
            )}
        </StyledNav>
    );
}

export default Navigation;
