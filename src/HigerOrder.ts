// const n = [1, 2, 3, 4, 5];
// const square = n.map((num) => num * num);
// console.log(square);

// const n = [1, 2, 3, 4, 5];
// const even = n.filter((num) => num % 2 === 0);
// console.log(even);

function processNumbers(inputList: number[]): number[] {

    const divisibleByThree = inputList.filter((num) => num % 3 === 0);

    const cubedList = divisibleByThree.map((num) => num ** 3); // num * num * num

    return cubedList;
}

const numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultList: number[] = processNumbers(numberList);

console.log(resultList);