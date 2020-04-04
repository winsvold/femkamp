import { Spiller } from './AppContext';

export function injectTotalScore(spillere: Spiller[]): Spiller[] {
    return spillere.map((spiller) => {
        const totalScore =
            (spiller.score.pass ?? 0) +
            (spiller.score.kløver ?? 0) +
            (spiller.score.kabal?.pass ?? 0) +
            (spiller.score.kabal?.rest ?? 0) +
            (spiller.score.dame ?? 0) +
            (spiller.score.grang ?? 0);

        return {
            ...spiller,
            score: {
                ...spiller.score,
                total: totalScore,
            },
        };
    });
}
