import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HistorikkSpill } from '../manageHistorikk';
import { Spiller } from '../../AppContext';
import ExpandablePanel from '../../Components/ExpandablePanel';

const Style = styled.div`
    margin: 6vmin 0;
`;

const StyledHistorikk = styled.div`
    margin: 0.5rem auto;
    max-width: 30rem;
`;

const IngenHistorikkStyle = styled.div`
    padding: 2rem 1rem;
    text-align: center;
`;

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

const ScoreView = (props: { spiller: Spiller }) => {
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

function Historikk() {
    const [historikk, setHistorikk] = useState<HistorikkSpill[] | undefined>(undefined);
    useEffect(() => {
        const item = localStorage.getItem('historikk');

        if (item) {
            const parsedHistorikk: HistorikkSpill[] = JSON.parse(item);
            setHistorikk(parsedHistorikk);
        }
    }, []);

    if (!historikk) {
        return (
            <IngenHistorikkStyle>
                Du har ingen historikk.
                <br />
                <br />
                Start et nytt spill ved å gå videre til oppsett.
            </IngenHistorikkStyle>
        );
    }

    return (
        <Style>
            {historikk.map((spill, i) => {
                const dato = new Date(spill.dato);
                const datoString =
                    dato.getDate().toString().padStart(2, '0') +
                    '.' +
                    dato.getMonth().toString().padStart(2, '0') +
                    '.' +
                    dato.getFullYear();
                const spillerNavn = spill.spillere.map((spiller) => spiller.navn);
                const buttonText = datoString + ' ' + spillerNavn.join(', ');
                return (
                    <StyledHistorikk key={buttonText}>
                        <ExpandablePanel buttonText={buttonText}>
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
                                    {spill.spillere.map((spiller) => (
                                        <ScoreView spiller={spiller} key={spiller.navn} />
                                    ))}
                                </tbody>
                            </StyledTable>
                        </ExpandablePanel>
                    </StyledHistorikk>
                );
            })}
        </Style>
    );
}

export default Historikk;
