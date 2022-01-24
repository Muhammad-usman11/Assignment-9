// 1. Write a js program to read and print elements of array.
var name_array = ["Muhammad","Ali","Usman","Omer","Hamza","Faisal"]
for (let i = 0; i<name_array.length; i++) {
    console.log(i,name_array[i]);
}
console.log("...............................................");
// 2. Write a js program to print all negative elements in an array.
var mix_array = [-2,"ali","hina",23,5,-9,-88,-6,6,55,0,"hafiz"]
for (let i=0; i<mix_array.length; i++) {
    if (mix_array[i]<0) {
        console.log("Negative values :",mix_array[i]);
    }
}
console.log("..............................................");
// 3. Write a js program to find sum of all array elements.
var mixArray = [-2,23,5,-9,-88,-6,6,55,0,100]
var addition = mixArray[0]
for (let i=1; i<mixArray.length; i++) {
    addition = addition + mixArray[i] 
}
console.log("Sum of all Array Element :", addition);
console.log("...................................................");
// 4. Write a js program to find maximum and minimum element in an array.
var mix_array = [-2,23,5,-9,-88,-6,6,55,0,100,2000,-102]
var maximum = mix_array[0]
for (let i=1; i<mix_array.length; i++) {
    if (mix_array[i]>maximum){
        maximum = mix_array[i]
    }
}
console.log("Maximum number :",maximum);
var minimum = mix_array[0]
for (let i=1; i<mix_array.length; i++) {
    if (mix_array[i]<minimum){
        minimum = mix_array[i]
    }
}
console.log("Minimum number :", minimum);
console.log("...............................................");
// 5. Write a js program to find second largest element in an array.
var numArray = [-2,23,5,-9,-88,-6,6,55,0,301,300,2000,-102,8000]
var largest = -2417
var secondLargest = -2417
for (let index = 0; index < numArray.length; index++) {
    if (numArray[index]>largest) {
        secondLargest = largest
        largest = numArray[index]
    }
    else if (numArray[index]>secondLargest && numArray[index]!=largest) {
        secondLargest = numArray[index]
    }
    
}
console.log("Second Largest Number :",secondLargest);
console.log("...............................................");
//6. Write a js program to count total number of even and odd elements in an array.
var smallArray = [2,3,4,5,6,7,8,9,10,11,23]
var evenCount = 0
var oddCount = 0
for (let i = 0; i < smallArray.length; i++) {
    if (smallArray[i]%2===0) {
        console.log("Even :", smallArray[i]);
        evenCount += 1
        
    }
    
}
console.log("Total Counts :",evenCount);

for (let i = 0; i < smallArray.length; i++) {
    if (smallArray[i]%2!=0) {
        console.log("Odd :", smallArray[i]);
        oddCount +=1
        
    }
    
}
console.log("Total Counts :",oddCount);

console.log("...........................................");
// 7. Write a js program to count total number of negative elements in an array.
var negativeArray = [2,2,3,4,5,-1,3,4,44,444,5,-9,-76]
var count = 0
for (let index = 0; index < negativeArray.length; index++) {
   if (negativeArray[index]<0) {
       console.log("element :",negativeArray[index]);
       count += 1
   }
    
}
console.log("Total Counts :",count);
console.log("...............................................");
// 8. Write a js program to copy all elements from an array to another array.
var arrayOne = [1,2,3,4,5,55,66,77,88,99,100]
var arrayTwo = []
var store = 0
for (let i = 0; i < arrayOne.length; i++) {
    store = arrayOne[i]
    arrayTwo.push(store)
}

console.log("Duplicate Array :",arrayTwo);
console.log("........................................");
// 9. Write a js program to insert an element in an array.
var array1 = [1,2,3,4,5,55,66,77,88,99,100]
array1.push(22,0)
console.log("Insert elment :",array1);
array1.pop()
console.log("Delete element :",array1);
console.log("......................................");
// 10. Write a js program to delete an element from an array at specified position.
var LatestArray = [1,2,3,4,5,55,66,77,88,99,100]
var DeleteElement = 88
var NewArray = []
for(let i=0; i<LatestArray.length; i++){
    if(LatestArray[i]!== DeleteElement){
        NewArray.push(LatestArray[i])
    }
}
console.log("Original array :", LatestArray);
console.log("Delete element from an array :", NewArray);
console.log("......................................");















