let gibberish="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjjkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let lastvowel = Math.max(gibberish.lastIndexOf("a"), gibberish.lastIndexOf("e"), gibberish.lastIndexOf("i"), gibberish.lastIndexOf("o"), gibberish.lastIndexOf("u"));

console.log(`The last vowell in the string is '${gibberish.charAt(lastvowel)}' and can be found at the index ${lastvowel}.`);