import styled, { css } from 'styled-components/macro';

const commonStyling = css`
    background-color: #5555;
    color: lightgoldenrodyellow;
    font-family: inherit;
    font-size: inherit;
    border: 0.2rem solid #fff5;
    padding: 0.2rem 0.5rem;
`;

export const Button = styled.button`
    ${commonStyling};
`;

export const Input = styled.input`
    ${commonStyling};
`;
