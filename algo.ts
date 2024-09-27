// let a : string = "#";

// let test : string = " ".repeat(6);
// let test2 : string = "#".repeat(4);
// let result : string = test + test2;
// console.log(result);

// console.log(test);

// function staircase(n:number):void {
//     // Write your code here
//     for (let i : number = 1; i <= n; i++) {

//         let space : string = " ".repeat(n-i);
//         let test2 : string = a.repeat(i);
//         console.log(test2);

//     //    const element = space + test2;
//     // console.log(element);
//     }
// }

// staircase(6);

// function miniMaxSum(arr: number[]): void {
//     let min : number = Math.min(...arr);
//     let max : number = Math.max(...arr);

//   let Allmin : number [] = arr.filter((num) => num !== max );
//   let Allmax : number [] = arr.filter((num1) => num1 !== min );

// let  sommeMin : number = 0;
// let sommeMax : number = 0;
//   for (let i = 0; i < Allmin.length; i++) {
//     sommeMin += Allmin[i];
//   }
//   for (let y = 0; y < Allmax.length; y++) {
//     sommeMax += Allmax[y];

//   }
//   console.log( `${sommeMin} ${sommeMax}`);

//   let min: number = Math.min(...arr);
//   let max: number = Math.max(...arr);
//   let allMin: number[] = arr.filter((minNumber) => minNumber !== max);
//   let allMax: number[] = arr.filter((maxNumber) => maxNumber !== min);

//   let sommeMin: number = 0;
//   let sommeMax: number = 0;

//   for (let i: number = 0; i < allMin.length; i++) {
//     sommeMin += allMin[i];
//   }

//   for (let y: number = 0; y < allMax.length; y++) {
//     sommeMax += allMax[y];
//   }

//   console.log(`${sommeMin} ${sommeMax}`);
// }

// miniMaxSum([5, 5, 5, 5, 5]);

// function birthdayCakeCandles(candale: number[]): number {
//   // Write your code here

// const numbers: number = Math.max(...candale);
//   const max: number[] = [];


// for (let i = 0; i < candale.length; i++) {
//   const element = candale[i];
// if (numbers==element) {
// max.push(element);
// }
  
// }
//   return max.length;
// }

// console.log(birthdayCakeCandles([3, 2, 3, 3]));
