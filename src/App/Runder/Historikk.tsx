import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HistorikkSpill } from '../manageHistorikk';
import { Spiller } from '../../AppContext';
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
                            <ScoreTable spillere={spill.spillere} />
                        </ExpandablePanel>
                    </StyledHistorikk>
                );
            })}
        </Style>
    );
}

export default Historikk;
