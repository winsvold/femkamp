import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HistorikkSpill } from '../manageHistorikk';
import { Spiller } from '../../AppContext';
import ExpandablePanel from '../../Components/ExpandablePanel';

const Style = styled.div``;

const StyledHistorikk = styled.div`
    margin-left: 0.5rem;
`;

const IngenHistorikkStyle = styled.div`
    padding: 2rem 1rem;
    text-align: center;
`;

const StyledTable = styled.table`
    border-collapse: collapse;
    border: 1px solid;
    margin-left: 0.5rem;

    th,
    td {
        padding: 0.5rem;
        text-align: left;
        border: 1px solid;
        font-weight: normal;

        // Total sum
        &:last-child {
            font-weight: bold;
        }
    }

    margin-bottom: 1rem;
`;

const StyledHeader = styled.h3`
    margin-left: 0.5rem;
    //  border-bottom: 1px solid;
    display: inline-block;
    padding: 0 0.5rem 0.3rem;
`;

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

    const getScoreView = (spiller: Spiller, key: string) => {
        const { navn, score } = spiller;
        return (
            <div key={key}>
                <StyledHeader>{navn}</StyledHeader>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Pass</th>
                            <th>Kløver</th>
                            <th>Dame</th>
                            <th>Grang</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{score.pass}</td>
                            <td>{score.kløver}</td>
                            <td>{score.dame}</td>
                            <td>{score.grang}</td>
                            <td>{score.total}</td>
                        </tr>
                    </tbody>
                </StyledTable>
            </div>
        );
    };
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
                const spillerScore = spill.spillere.map((spiller) => getScoreView(spiller, dato + '-' + spiller.navn));
                const buttonText = datoString + ' ( ' + spillerNavn.join(', ') + ' )';
                return (
                    <StyledHistorikk key={buttonText}>
                        <ExpandablePanel buttonText={buttonText}>
                            <>{spillerScore}</>
                        </ExpandablePanel>
                    </StyledHistorikk>
                );
            })}
        </Style>
    );
}

export default Historikk;
