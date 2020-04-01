import { Spiller } from '../AppContext';

const localStorage = window.localStorage;

interface HistorikkSpill {
    spillere: Spiller[];
    dato: Date;
}

export function lagreSpill(spillere: Spiller[]) {
    const historikk = JSON.parse(localStorage.getItem('historikk') || '[]');
    const klarForLagring: HistorikkSpill = {
        dato: new Date(),
        spillere: spillere,
    };
    localStorage.setItem('historikk', JSON.stringify([...historikk, klarForLagring]));
}
