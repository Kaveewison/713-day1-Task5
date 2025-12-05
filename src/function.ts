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


// function calculateSum(scores: number[]): number {
//     let sum = 0;
//     for (const score of scores) {
//         sum += score;
//     }
//     return sum;
// }
//
// const studentScores: number[] = [46, 35, 29, 45];
// const totalSum: number = calculateSum(studentScores);
// console.log(`Total score sum: ${totalSum}`);

// const greet = function greet(name){
//     return 'Hello ' + name
// }
//
// console.log(greet('John'))


// const greet = (name) => 'Hello ' + name
//
// console.log(greet('John'))
//
// const ShowMax = (x: number, y: number): number => {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// };
//
// console.log(`Max of (5, 10): ${ShowMax(5, 10)}`);
// console.log(`Max of (20, 15): ${ShowMax(20, 15)}`);


const findMax = (list: number[]): string => {
    if (list.length === 0) {
        return "List is empty"; // กรณี List ว่าง
    }

    const max = Math.max(...list);


    return max.toString();
};

const numbers: number[] = [10, 8, 75, 32];
const maxAsString: string = findMax(numbers);
console.log(`Max value as string: ${maxAsString}`);
console.log(`Type of result: ${typeof maxAsString}`);


