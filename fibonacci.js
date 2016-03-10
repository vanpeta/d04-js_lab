//fibonacci

function fibonacci() {
var a = 1;
var b = 2;
var result = (a + b);
console.log (a);
console.log (b);
for (var i=0; i<19; i++) {
  a=b;
  b=result;
  result = (a+b);
  console.log (result);
}
}

fibonacci();

//ascii
function ascii() {
var a = "1"
var b = "1"
console.log (a)
  for (var i = 0; i<10; i++) {
a= a+b
console.log(a)
}
}

ascii()


function allPossibleSums () {
var arrA=[1,2,3,4];
var arrB=[9,8,7];
var sum =[];
for (var i=0; i<arrA.length; i++){
    for (var j=0; j<arrB; j++){
       return sum.push(arrA[i]+arrB[j])
    }
}
console.log (sum)
}
allPossibleSums();


//
var bicycle = {
  gears : [1,2,3,4],
  pedalsFrequency : rpm;
}

var arr = [1,2,3]
var person = {
  firstName : John,
  lastName : Williams,
  age : 23,
}

console.log (firstName.)

