import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from './Skjema';

const ButtonStyle = styled(Button)`
    margin: 1rem 1rem 1rem 0;
`;

const Chevron = styled.span<{ direction: string }>`
    &::before {
        border-style: solid;
        border-width: 0.2em 0.2em 0 0;
        content: '';
        display: inline-block;
        height: 0.45em;
        width: 0.45em;
        margin: 0.2rem 0.2rem 0 0.3rem;
        transform: rotate(-45deg);
    }

    ${(props) =>
        props.direction === 'down' &&
        css`
            &&::before {
                margin: 0 0.2rem 0.2rem 0.3rem;

                transform: rotate(135deg);
            }
        `}
`;

interface Props {
    buttonText: string;
    children: React.ReactElement;
}

function ExpandablePanel(props: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <ButtonStyle onClick={() => setIsOpen(!isOpen)}>
                {props.buttonText} <Chevron direction={isOpen ? 'up' : 'down'} />
            </ButtonStyle>
            {isOpen && <div>{props.children}</div>}
        </>
    );
}

export default ExpandablePanel;
