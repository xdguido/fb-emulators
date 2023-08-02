/*
Task 1
*/

interface TeamScore {
    teamName: string;
    score: number;
}

interface Percentiles {
    percentile10: number;
    percentile50: number;
    percentile90: number;
}

function calculatePercentiles(scores: TeamScore[]): Percentiles[] {
    // Sort the scores in ascending order
    const sortedScores = scores.sort((a, b) => a.score - b.score);

    // Calculate the percentiles. This would be more efficient if the scores were sorted in Firestore
    const totalScores = sortedScores.length;

    const percentile10Index = Math.floor(totalScores * 0.1);
    const percentile50Index = Math.floor(totalScores * 0.5);
    const percentile90Index = Math.floor(totalScores * 0.9);

    const result: Percentiles[] = [];

    // Add the percentiles to the result
    result.push({
        percentile10: sortedScores[percentile10Index].score,
        percentile50: sortedScores[percentile50Index].score,
        percentile90: sortedScores[percentile90Index].score,
    });

    return result;
}

// Example usage:
const exampleScores: TeamScore[] = [
    { teamName: 'exampleName1', score: 4 },
    { teamName: 'exampleName2', score: 7 },
    { teamName: 'exampleName3', score: 10 },
    { teamName: 'exampleName4', score: 5 },
    { teamName: 'exampleName5', score: 8 },
    { teamName: 'exampleName6', score: 12 },
    { teamName: 'exampleName7', score: 3 },
    { teamName: 'exampleName8', score: 6 },
    { teamName: 'exampleName9', score: 9 },
    { teamName: 'exampleName10', score: 11 },
    { teamName: 'exampleName11', score: 14 },
    { teamName: 'exampleName12', score: 7 },
    { teamName: 'exampleName13', score: 2 },
    { teamName: 'exampleName14', score: 6 },
    { teamName: 'exampleName15', score: 13 },
    { teamName: 'exampleName16', score: 8 },
    { teamName: 'exampleName17', score: 10 },
    { teamName: 'exampleName18', score: 15 },
];

const percentilesResult = calculatePercentiles(exampleScores);
console.log(percentilesResult);
