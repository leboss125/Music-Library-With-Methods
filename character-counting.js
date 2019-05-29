var args = process.argv.slice(2);
console.log(countLetters(args));

function countLetters (arg) {
  var string = findString(arg);
  var newString = string.replace(" ", "").toLowerCase();
  var obj = {};
  
  for (var i = 0; i < newString.length; i++) {
    var letter = newString[i];
    if(!obj[letter]){
      obj[letter] = 1;
    }
    else {
      obj[letter] += 1;
    }
  }
  return obj;
}
function findString(arg) {
  var string = "";
  for (var i = 0; i < arg.length; i++) {
    string += arg[i];
  }
  return string;
}