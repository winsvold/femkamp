import * as React from 'react';
import styled from 'styled-components';
import { Spiller } from '../AppContext';

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;

    th,
    td {
        padding: 0.2rem 0.1rem;
        text-align: center;
        font-weight: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 0;

        // Total sum
        &:first-child {
            text-align: left;
        }
        &:last-child {
            font-weight: bold;
        }
    }

    margin-bottom: 1rem;
`;

const ScoreTableRad = (props: { spiller: Spiller }) => {
    const { navn, score } = props.spiller;
    return (
        <tr>
            <td>{navn}</td>
            <td>{score.pass}</td>
            <td>{score.kløver}</td>
            <td>{score.kabal?.rest + score.kabal?.pass}</td>
            <td>{score.dame}</td>
            <td>{score.grang}</td>
            <td>{score.total}</td>
        </tr>
    );
};

function ScoreTable(props: { spillere: Spiller[] }) {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Spiller</th>
                    <th>Pass</th>
                    <th>Kløver</th>
                    <th>Kabal</th>
                    <th>Dame</th>
                    <th>Grang</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {props.spillere.map((spiller) => (
                    <ScoreTableRad spiller={spiller} key={spiller.navn} />
                ))}
            </tbody>
        </StyledTable>
    );
}

export default ScoreTable;
