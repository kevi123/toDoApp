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


var counter=0;
var tasks = items1.children;
var userTask;
var b;

console.log(counter);
document.getElementById("myButton").addEventListener("click", myFunction());
console.log("passedEvent");

function myFunction(){
  userTask= prompt("Hello please add item to do list");
  //console.log(items1.children);
  console.log(tasks);
  tasks[counter].textContent = userTask;
   // var newNode= tasks[counter]
   // document.getElementById("items1").appendChild(newNode);
   counter=counter+1;
};

document.getElementById("finishedButton").addEventListener("click", finishedFunction());

function finishedFunction(){
  userTask= prompt("WHich task is finished? 1-4");
  //console.log(items1.children);
  console.log(tasks);
  tasks[counter].textContent = userTask;
   // var newNode= tasks[counter]
   // document.getElementById("items1").appendChild(newNode);
   counter=counter-1;
};




// headerTitle.textContent= "Hello";
// document.getElementById("header-title").textContent= "yoyo"; //changes current html

// headerTitle.style.borderBottom= "solid 3px #000"; //this is how you access or add css promperties
