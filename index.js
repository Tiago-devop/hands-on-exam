const palindrome = (str) => {
  // \W matches any non-word character
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  console.log(reverseStr);
  return reverseStr === lowRegStr;
}

console.log(palindrome("subi no onibus"))