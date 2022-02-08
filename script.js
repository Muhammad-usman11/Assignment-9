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
console.log("Delete element from specific element :", NewArray);
console.log("......................................");
// 11. Write a js program to count frequency of each element in an array.
var arr = [2,1,1,3,4,4,5,8,0]
var frequency = [arr.length]
visit = -1
for (let i = 0; i < arr.length; i++) {
    count = 1 
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] === arr[j]){
            count = count + 1
            frequency[j] = visit
        }
        
    }
    if (frequency[i] !== visit) {
        frequency[i] = count
    }     
}
console.log(arr);
console.log("Elements        Frequency");
for (let i = 0; i < frequency.length; i++) {
    if (frequency[i] !== visit) {
        console.log(arr[i],"             ",frequency[i]);
    }
    
}
console.log("............................................");  
// 12. Write a js program to print all unique elements in the array.
var arr = ["usman","ali","omer","ali"]
var Ne = []
for (let i = 0; i < arr.length; i++) {
   if (Ne.indexOf(arr[i]) === -1) {
       Ne.push(arr[i])
   }
    
}
console.log(arr);
console.log("Unique elements :",Ne);
console.log("....................................");
// 13. Write a js program to count total number of duplicate elements in an array.
console.log("same above program no 11");
console.log("..........................");
// 14. Write a js program to delete all duplicate elements from an array
console.log("same above program no 12");
console.log("..........................");
// 15. Write a js program to merge two array to third array.
var a = [1,2,3,4]
var b = [5,6,7,8,9]
var c = [] 
console.log(a);
console.log(b);
for (let i = 0; i < a.length; i++) {
    c.push(a[i])
}
for (let j = 0; j< b.length; j++) {
    c.push(b[j])
}
console.log("Merge two array :",c);
console.log(".......................................");
// 16. Write a js program to find reverse of an array.
var array = [1,2,3,4,5,6,7,8,9]
var ReverseArray = []
for (let i=array.length-1; i >= 0; i--) {
    ReverseArray.push(array[i])
}
console.log("Original Array :",array);
console.log("Reverse Array :",ReverseArray);
console.log("..........................................");
// 17. Write a js program to put even and odd elements of array in two separate array.
var array = [1,2,3,4,5,6,7,8,9,10]
console.log("Original Array :",array);
var EvenArray = []
var OddArray = []
for (let i = 0; i < array.length; i++) {
    if (array[i]%2===0) {
        EvenArray.push(array[i])
    }
    if (array[i]%2!==0) {
        OddArray.push(array[i])
    }
    
}
console.log("Even Array :",EvenArray);
console.log("Odd Array :",OddArray);
console.log("................................");
// 18. Write a js program to search an element in an array.
var array = [1,2,3,4,5,6,7,8,9,10]
var UserInput = 6
for (let i = 0; i < array.length; i++) {
    if (array[i]=== UserInput) {
        console.log("Your number has been matched.");
        console.log(array[i],"is on",i,"index");
    }
    else if (array.indexOf(UserInput)===-1) {
        console.log(UserInput," does not exist in an array");
    }
    
}
console.log(".........................................");
// 19. Write a js program to sort array elements in ascending or descending order.
var array = [3,4,5,11,1,8,0,6]
console.log(array);

var SortArray = array.sort((a,b)=>{
    return a - b 
} ) 
console.log("Sorting :",SortArray);
console.log("...........................");
// 20. Write a js program to sort even and odd elements of array separately.
var array = [3,4,5,11,1,8,0,6]
console.log(array);
var evenArray = []
var oddArray = []
for (let i = 0; i < array.length; i++) {
    if (array[i]%2==0){
        evenArray.push(array[i])
    }
    else{
        oddArray.push(array[i])
    }
    
}
// console.log(evenArray);
// console.log(oddArray);
var evenSorting = evenArray.sort((a,b) => a-b)
var oddSorting = oddArray.sort((a,b) => a-b)
console.log("Even Sorting :",evenSorting);
console.log("Odd Sorting :",oddSorting);
console.log("....................................");
// 21. Write a js program to left rotate an array.
var array = [1,2,3,4,5,6]
console.log("Original Array :",array);
var rotation = 2
var RotateArray = array.concat()
for (let i = 0; i < rotation; i++) {
   var DeleteItem = RotateArray.shift()
   RotateArray.push(DeleteItem) 
}
console.log("After Rotation :", RotateArray);
console.log("..................................");
// 27. Write a js program to check whether a number is even or odd using switch case.
var userInput = "g"
console.log("User Input :",userInput);
switch (userInput%2) {
    case 0:
        console.log(userInput,"Even number");   
        break;

    case 1:
        console.log(userInput,"Odd number");    
        break;
   
    default:  
        console.log(userInput,"is wrong");
}
console.log(".................................");
// 23. Write a js program to print day of week name using switch case.
var userInput = 7
console.log("Please chose (0....6) number for print week days");
console.log("User Input :",userInput);
switch (userInput) {
    case 0:
        console.log(userInput,"means","It's Monday!");
        break;
    case 1:
        console.log(userInput,"means","It's Tuesday!");
        break;
    case 2:
        console.log(userInput,"means","It's Wanesday!");
        break;
    case 3:
        console.log(userInput,"means","It's Thursday!");
        break;     
    case 4:
        console.log(userInput,"means","It's Friday!");
        break;
    case 5:
        console.log(userInput,"means","It's Saturday!");
        break;
    case 6:
        console.log(userInput,"means","It's Sunday!");
        break;        
    default:
        console.log(userInput,"Invalid Input");
        break;
}
console.log(".................................");
// 24. Write a js program print total number of days in a month using switch case.
var userInput = 14
console.log("Please chose (1....12) number for print Total number of days");
console.log("Month number :",userInput);
switch (userInput) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Total number of days : 31");    
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Total number of days : 30");
        break;
    case 2:
        console.log("Total number of days : 28 or 29");
        break;
    default:
    console.log("Invalid Input");
    break;
}
console.log(".............................................");
// 30. Write a js program to create Simple Calculator using switch case.
var FirstNum = 2
var SecondeNum = 3
var ThirdNum = 8
var UserInput = "-"
console.log("First Number :",FirstNum);
console.log("Seconde Number :",SecondeNum);
console.log("Third Number :",ThirdNum);
console.log("Choose your operation '+,-,*,/':",UserInput);

switch (UserInput) {
    case "+":
        var SumRes = FirstNum+SecondeNum+ThirdNum
        console.log("Your Sum :",SumRes);
        break;
    case "-":
        var MinusRes = FirstNum-SecondeNum-ThirdNum
        console.log("Your subtract :",MinusRes);
        break;
    case "*":
        var MultiplyRes = FirstNum*SecondeNum*ThirdNum
        console.log("Your Multiplication :",MultiplyRes);
        break;
    case "/":
        var DivisionRes = FirstNum/SecondeNum/ThirdNum
        console.log("Your Division :",DivisionRes);
        break;

    default:
        console.log("Error!!");
        break;
}
console.log("........................................");


































































