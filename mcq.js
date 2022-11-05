What is the output of 

function f1() {
    console.log(“this is”, this);
    console.log(“arguments is”, arguments);
}
f1()

Choices are 
Null, null
Undefined, undefined
//global, arguments
f1, undefined



2) in the above function f1, I do the following


let f11 = f1.bind({a:1}, 'abc');
f11('def');

What is the output now ?

Choices are 
Null, null
Undefined, undefined
//{a:1}, arguments = [“abc”, “def”]
{a: 1}, arguments = [“def”]

3) Write a simple function that will split an array into chunks with a specified size. 
Example - array = [1,2,3,4,5]
chunkSize = 1 output = [1] [2] [3] [4] [5]
chunkSize = 2 [1, 2] [3, 4] [5]
chunkSize = 3 [1, 2, 3] [4, 5] 
chunkSize = 4 [1, 2, 3, 4] [5] 
chunkSize = 5 [1, 2, 3, 4, 5]
chunkSize = 6 [1, 2, 3, 4, 5]

Function signature is
function sliceIntoChunks(array, chunkSize) {
	//TODO: implement this.
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
  }
  return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sliceIntoChunks(arr, 3));










