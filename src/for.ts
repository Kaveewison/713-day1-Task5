// let i = 0;
// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// for (let i = 0; i < color.length; i++) {
//     console.log(color[i]);
// }

// let names: string[] = ['Mongkol', 'Ari', 'Nuttapol', 'Nutcha',  'Kritsada'];
//
// // for (let i = 0; i < names.length; i++) {
// //     const name = names[i];
//
// for (const name of names) {
//
//     if (name!.length > 6) {
//         console.log(`สวัสดีคุณ ${name}`);
//     }
//
//     else {
//         console.log(`Hello ${name}`);
//     }
// }

// let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// for (const c of color) {
//     console.log(c);
// }

let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
for (const index in color) {
    console.log(`Index: ${index}, Value: ${color[index]}`);
}

