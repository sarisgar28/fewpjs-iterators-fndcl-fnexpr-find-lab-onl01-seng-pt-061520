const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
];
//write a function called superBowlWin()
// receives 1 argument, an array of JS object S 
//each object has two properties YEAR - RESULT
// use find() to test each objects to see if the result is "W" a win 
// superbowlWin() should return the year when the win occurred (if it occurred at all!). If no win is found, it should return, sadly, undefined
function superbowlWin(){
return record.find(year === "2017");
console.log(year)
};


