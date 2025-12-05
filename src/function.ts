// function greet(name: string){
//     console.log('Hello ' + name);
// }
// greet('John');


// @ts-ignore
// function greet(name){
//     return 'Hello ' + name
// }
//
// console.log(greet('John'))


function calculateSum(scores: number[]): number {
    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return sum;
}

const studentScores: number[] = [46, 35, 29, 45];
const totalSum: number = calculateSum(studentScores);
console.log(`Total score sum: ${totalSum}`);