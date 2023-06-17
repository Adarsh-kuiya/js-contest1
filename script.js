/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {

  //Write your code here , just console.log
}

function addData() {
   const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(newEmployee); //Write your code here, just console.log
}

function removeAdmin() {
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
  //Write your code here, just console.log
}

function concatenateArray() {
   const newArray = [
    { id: 4, name: "maesh", age: "19", profession: "mistri" },
    { id: 5, name: "suresh", age: "21", profession: "plumber" },
    { id: 6, name: "naresh", age: "29", profession: "electrician" }
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
  //Write your code here, just console.log
}
