function isPalindrome(s) {
 var stringReverse = s.split("").reverse().join("").replace(/ /g,'');
 return s.split("").join("").replace(/ /g,'') == stringReverse;
}

module.exports = isPalindrome;

console.log("a man a plan a canal panama".split("").reverse().join("").replace(/ /g,''))

console.log(isPalindrome("a man a plan a canal panama"))