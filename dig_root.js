//
//
// function sumDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += (num % 10);
//     num = Math.floor(num/10);
//   }
// return sum;
// }
//
// function digitalRoot(num) {
//   while (num >= 10) {
//     num = sumDigits(num);
//   }
//   return num;
// }
//
//
// function compress(str) {
//   let result = [];
//   let char = "";
//   let currentChar = str[0];
//   let currentCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     char = str[i];
//     if (char === currentChar) {
//       currentCount += 1;
//     } else {
//       result.push([currentChar, currentCount]);
//       currentChar = char;
//       currentCount = 1;
//     }
//   }
//
//   result.push([currentChar, currentCount]);
//
//
//   return result
//   .map(([x, y]) => y < 2 ? x : x + y).join('');
// }


function compress(str) {
  let compress_arr = [];
  let currentChar = str[0];
  let currentCount = 0;
  let char;
  for (let i =0; i < str.length; i++) {
    char = str[i];
    if (char === currentChar) {
      currentCount += 1;
    } else {
      compress_arr.push([currentChar, currentCount]);
      currentChar = char;
      currentCount = 1;
    }
  }

  compress_arr.push([currentChar, currentCount]);
  return compress_arr.map(([char, count]) => count < 2 ? char : char + count).join('');
}
