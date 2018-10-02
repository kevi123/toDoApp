//alert()
//confirm()//asks for bool
//prompt()//ask for input

/*
//console.dir(document)//this give us all the info of the document
console.log(document.domain);
console.log(document.URL);
console.log(document.title);

// document.title = "changer";
console.log(document.doctype);
// console.log(document.head);
console.log(document.body);
console.log(document.all[10]);
// console.log(document.body);

// document.all[21].textContent= "Hello"; //this replaces the inner textContent

console.log(document.forms);    //this gives array of all forms
console.log(document.links);    //array of all links
console.log(document.images);   //array of all images


console.log(document.getElementById('header-title')) //searches for id header-title and gives everything in the tage
var headerTitle = document.getElementById('done');
console.log(headerTitle);

/*
var node = document.createElement("LI");
var textnode = document.createTextNode("water");
node.appendChild(textnode)
document.getElementById("items").appendChild(node);
*/


var taskCounter=0;
var doneCounter=0;
var tasksList = items1.children;
var doneList = items2.children;
var userTask; //this holds a string of name of tasks
var userNum=0;
var userDelete=0;
var b;

console.log(taskCounter);
document.getElementById("myButton").addEventListener("click", myFunction); //we find the only instance of myButton, when clicked activate function
console.log("passedEvent");

function myFunction(e){
  e.preventDefault();   //we need this so page soes not refresh. forms request url yada yada
  userTask= prompt("Hello please add item to do list");
  var node = document.createElement("li"); //creates <li></li>
  node.className += "list-group-item"; //<li class="list-group-item"></li>
  var textnode = document.createTextNode(userTask);
  node.appendChild(textnode);   //<li>"text"</li>
  document.getElementById("items1").appendChild(node);//<ul><li>text</li></ul>
  console.log(tasksList);

   taskCounter=taskCounter+1;
};

document.getElementById("finishedButton").addEventListener("click", finishedFunction);

function finishedFunction(e){
  e.preventDefault();   //we need this so page soes not refresh. forms request url yada yada
  userNum= prompt("WHich task is finished? 0-7");
  //console.log(items1.children);
  // console.log(tasksList);
  doneList[doneCounter].textContent = tasksList[userNum].textContent;
   // var newNode= tasks[counter]
   // document.getElementById("items1").appendChild(newNode);
   tasksList[userNum].textContent= "moved to Done List";
   taskCounter=taskCounter-1;
   doneCounter= doneCounter+1;
};

document.getElementById("deleteButton").addEventListener("click", deleteFunction);

function deleteFunction(e){
  e.preventDefault();   //we need this so page soes not refresh. forms request url yada yada
  userDelete= prompt("WHich item to permanently delete? 0-7");
  //console.log(items1.children);
  // console.log(tasksList);
  doneList[userDelete].textContent = "Deleted!!!";
   // var newNode= tasks[counter]
   // document.getElementById("items1").appendChild(newNode);
   // tasksList[userNum].textContent= "moved to Done List";
   // taskCounter=taskCounter-1;
   // doneCounter= doneCounter+1;
};


var node = document.createElement("li");
node.className += "list-group-item";
var textnode = document.createTextNode("water");
node.appendChild(textnode);
document.getElementById("items1").appendChild(node);


node = document.createElement("li");
node.className += "list-group-item";
textnode = document.createTextNode("firefdg");
node.appendChild(textnode);
document.getElementById("items1").appendChild(node);

// Removes an element from the document
var element = document.querySelectorAll(".done")[0];
console.log(element)
element.parentNode.removeChild(element);


var test = document.querySelectorAll(".list-group-item")[0];
console.log(test)


// headerTitle.textContent= "Hello";
// document.getElementById("header-title").textContent= "yoyo"; //changes current html

// headerTitle.style.borderBottom= "solid 3px #000"; //this is how you access or add css promperties
