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

// function timeConversion(s: string): string {
//   // Write your code here
//   const hoursMilitary: string[] = [
//     "00",
//     "01",
//     "02",
//     "03",
//     "04",
//     "05",
//     "06",
//     "07",
//     "08",
//     "09",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//   ];

//   let hour: string = "";
//   let heure: string = "";

//   if (s.includes("PM")) {
//     for (let i = 0; i < hoursMilitary.length; i++) {
//       const element = hoursMilitary[i];
//       if (s.substring(0, 2) == element) {
//         const num: number = parseInt(element, 10);
//         const stringNumber: number = num + 12;
//         hour = s.replace(element, stringNumber.toString());

//         if (s.substring(0, 2) == "12") {
//           hour = s.replace(element, "12");
//         }
//       }
//     }
//     heure = hour.replace("PM", "");
//   } else if (s.includes("AM")) {
//     for (let i = 0; i < hoursMilitary.length; i++) {
//       const element = hoursMilitary[i];
//       if (s.substring(0, 2) == element) {
//         hour = s.replace(element, element);
//         if (s.substring(0, 2) == "12") {
//           hour = s.replace(element, "00");
//         }
//       }
//     }
//     heure = hour.replace("AM", "");
//   }

//   return heure;
// }

// console.log(timeConversion("12:05:45AM"));
// console.log(timeConversion("08:05:45PM"));

