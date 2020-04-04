import { Spiller } from './AppContext';

export function injectTotalScore(spillere: Spiller[]): Spiller[] {
    return spillere.map((spiller) => {
        const currentScore = spiller.score;
        const totalScore =
            (currentScore.pass ?? 0) +
            (currentScore.kløver ?? 0) +
            (currentScore.kabal?.pass ?? 0) +
            (currentScore.kabal?.rest ?? 0) +
            (currentScore.dame ?? 0) +
            (currentScore.grang ?? 0);

        return {
            ...spiller,
            score: {
                ...currentScore,
                total: totalScore,
            },
        };
    });
}
