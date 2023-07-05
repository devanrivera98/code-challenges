export function destroyer(arr, ...args) {
  return arr.filter(index => !args.includes(index));
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// export function destroyer(arr, ...args) {
//   const newArray = arr;
//   for (let i = 0; i <= args.length; i++) {
//     if (arr.includes(args[i])) {
//       console.log('this is args[i]', args[i]);
//       return newArray.filter(number => !arr.includes(number));
//     }
//   }

// }
