import { Spiller } from './AppContext';

export function injectTotalScore(spillere: Spiller[]): Spiller[] {
    return spillere.map((spiller) => {
        const currentScore = spiller.score;
        const totalScore =
            currentScore.pass +
            currentScore.kløver +
            currentScore.kabal.pass +
            currentScore.kabal.rest +
            currentScore.dame +
            currentScore.grang;

        return {
            ...spiller,
            score: {
                ...currentScore,
                total: totalScore,
            },
        };
    });
}
