// import { add } from './functions';
// const result = add(1,2) + 0;
//
//
// console.log(result, 'type of result:', typeof result);

// @ts-ignore
import { add,subtract } from './functions';
const result = add(1,2) + 0;
const result2 = subtract(1,2) + 0;
console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result2:', typeof result2);