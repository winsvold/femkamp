import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HistorikkSpill } from '../manageHistorikk';
import ExpandablePanel from '../../Components/ExpandablePanel';
import ScoreTable from '../../Components/ScoreTable';

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

const TextStyle = styled.div`
    display: flex;
    text-align: left;
    > *:last-child {
        margin-left: 0.5rem;
    }
`;

function Historikk() {
    const [historikk, setHistorikk] = useState<HistorikkSpill[] | undefined>(undefined);
    useEffect(() => {
        const item = localStorage.getItem('historikk');

        if (item) {
            const parsedHistorikk: HistorikkSpill[] = JSON.parse(item);
            setHistorikk(parsedHistorikk.reverse());
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
                const buttonText = (
                    <TextStyle>
                        <span>{datoString}</span>
                        <span>{spillerNavn.join(', ')}</span>
                    </TextStyle>
                );
                return (
                    <StyledHistorikk key={i}>
                        <ExpandablePanel buttonText={buttonText}>
                            <ScoreTable spillere={spill.spillere} />
                        </ExpandablePanel>
                    </StyledHistorikk>
                );
            })}
        </Style>
    );
}

export default Historikk;
