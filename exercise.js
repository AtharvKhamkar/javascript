// Array squared
// Square the value of every element in the array. Presume that you will only get numbers in the input array.

// const input = [1, 2, 3, 4, 5]

// const result = input.map((val) => val * val)
// console.log(result)

// Sum of every positive element
// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// const input = [1, -4, 12, 0, -3, 29, -150]
// const result = input.filter((item) => item >= 0)
//     .reduce((acc, item) => acc + item, 0);

// console.log(result)

//Calculate median and mean
// Calculate the mean and median values of the number elements from the input array.

// const input = [12, 46, 32, 64]
// const result = input.reduce((acc, curr) => {
//     return acc + curr
// }, 0)

// const sorted = input.sort((a, b) => a - b)
// console.log(sorted)
// function median(arr) {
//     const median = arr.length / 2
//     if (median % 2 == 0) {
//         const final = (arr[median] + arr[median - 1]) / 2;
//         return final
//     }
//     return arr[Math.ceil(median)]
// }
// console.log(`The mean of array is ${result / input.length}`)
// console.log(median(sorted))


// const input = [12, 46, 32, 64]

// const sorted = input.sort((a, b) => a - b)

// const result = sorted.reduce((acc, val,index,arr) => {
//     acc.mean += val / arr.length

//     if (arr.length % 2 === 0) {
//         if (index == arr.length / 2) {
//             acc.median += val
//             acc.median /= 2;
//         } else if (index === arr.length / 2-1) {
//             acc.median += val;
            
//         } 
        
//     }
//     else {
//         if (index === (arr.length - 1) / 2) {
//             acc.median = val
//         }
//     }
//     return acc;
// },{mean:0,median:0})
                    
// console.log(result)

// Get name initials
// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

// const input = "George Raymond Richard Martin";

// const seperated = input.split(" ");

// const result = seperated.map((val) => {
//     return val.charAt(0);
// });

// const finResult = result.toString();

// Age difference from the youngest and oldest
// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
];
  
input.sort((a, b) => a - b)
console.log(input)



