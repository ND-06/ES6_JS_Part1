// Let and Const


// ES5 Syntax

var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

// ES6 Syntax
// Instead var,we can now choose between Const and Let
// Const is for Constants (values that we dont want to change)
// let is like Var but with one difference.

const name6 = 'Jane Smith';
let age6 = '23';

/* We cannot mutate the name if we have defined the variable 
with a const --- Console log throws us an error - variable name6
 is IMMUTABLE

name6 = 'Jane Miller'

console.log(name6);*/

// VARIABLES declared with var in es5 are function-scoped but
// VARIABLES declared with CONST and LET are block scoped

// ES5 Syntax

function driverLicence5 (passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;

    }

    console.log(firstName + ', born in ' + yearOfBirth + ' ,is now officially allowed to drive a car');

}

driverLicence5(true);

// ES6



function driverLicence6 (passedTest) {

    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';

    }

    console.log(firstName + ', born in ' + yearOfBirth + ' ,is now officially allowed to drive a car');

}

driverLicence6(true);

/* We get an error saying that firstName is not defined,
which is strange, right?
But that's because, with let and const,
the variables are not function-scoped but block-scoped.
So what is a block?
A block is simply all the code that is wrapped
between these curly braces here.
So each time that we have an if statement or a for block
or a while block, we're actually creating a new block,
and the variables declared
with let and const are only valid, are only accessible,
by the code that are inside of the same block.
So if we move outside of the block,
which is what we did here, then we no longer have access
to these variables that are here.*/

/*So again, we now no longer have access
to the variables created inside of a block,
which is this one here in this case,
because these variables are now block-scoped ( with let and Const)
and no longer function-scoped (like it was with var)
So we can declare these variables outside of the block,
which, before, we did outside of the function,
and then define the variables in here.
So let's say, firstName
and const yearOfBirth.
And so now, in here, we can simply define them,
and then it should work.
Or does it?
Because actually, this also does not work.
It only works for the let, the declarations.
So we simply cannot define a constant here in a block
and then use it outside of that block.
If we really want to use this constant outside of the block,
then we have to declare the constant out here.
Then, of course, it's gonna work.
So, now it works again.
So we declared the firstName variable here,
outside of the block, but didn't define its value,
and then defined it in here,
and that's why we can then use the firstName variable
outside of the block, which is the exact same thing
that we used to do with functions before, right?*/


let i = 23

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

/*Okay, so we have 0, 1, 2, 3, 4,
which are these console.logs,
and then i is 23.
So assigning other values to i in here,
in this for loop,
doesn't change the i variable that we had defined here,
with a let.
And again, that's because these variables are block-scoped.
And so this i variable here is a completely different
variable from this one, so they happen
to have the same name, but it really doesn't matter,
because they are separate variables.
It's like having var i inside of a function
and var i outside of a function,
so these would be also two completely different variables,*/


/*

var i = 23;

for (var i = 23; i < 5; i++) {
    console.log(i);
}

console.log(i);

*/

/* So if we had var instead,
let's just very quickly test this out,
it would be 5,
because these variables, of course, are not block-scoped.
So this is now not a different variable,
and so this 23 here will be overwritten,
and in the end,
we have the final i from this counter variable here.*/

// Blocks and IIFE

// ES6

// We can make data privacy with a simpler way in ES6 
/*
{

let a = 10;
const b = 15;

}

console.log(a);

*/


// We can see that ours variables a and b are not visible from outside the block
// in ES6, we can create a new block with a for loop, an if else statement, a function but also
// only with {} symbols , thats means all code included inside our {} is not accessible from outside



// ES5 

// In ES5 , we have to create an IIFE in order to make our data privacy like this

/*(function () {

    var c = 19;

});

console.log(c);
*/

// Strings in ES6

// We are used to concatenate like this 

let firstName = 'Nathaniel';

let lastName = 'Debache';

const yearOfBirth = 1987;

function calcAge(yearOfBirth) {
    return 2019 - yearOfBirth;
}; 

console.log('Hello my name is ' + firstName + ' ' + lastName + 
' i am born in ' + yearOfBirth + ' and today i have ' + calcAge(yearOfBirth) + ' years');


// ES6 introduces an easier way to concatenate.
// WE JUST HAVE TO USE `` and ${} for variables 

console.log(`Hello my name is ${firstName} ${lastName} 
i'am born in ${yearOfBirth} and today i'have ${calcAge(yearOfBirth)} years !`);



// Another new feature in ES6 TO CHECK if a string includes, starts or end with a defined letter or letters

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('N')); // returns True
console.log(n.endsWith('e')); // returns True
console.log(n.includes('Deb')); // returns True
console.log(n.startsWith('f')); // returns False


// Finally , we can also repeat a string with ES6 with a new built in method


console.log(n.repeat(5));
console.log(`${firstName} ` .repeat(5)); // we can use litteral template to add a space inside repeated strings


// ARROW FUNCTIONS

const years = [1987, 1988, 1995, 2000];

// ES5 

// in ES5 , we used map method to loop through array , with a callback function and with an argument called el for example
// As we know , map method loops over the array -> we have access to the current element , 
// the current index , and also the entire array

/* Differences between map and forEach : Well, the forEach() method doesn’t actually return anything (undefined). 
It simply calls a provided function on each element in your array. 
This callback is allowed to mutate the calling array.
Meanwhile, the map() method will also call a provided function on every element in the array. 

The difference is that map() utilizes return values and actually returns a new Array of the same size.
forEach() may be preferable when you’re not trying to change the data in your array, 
but instead want to just do something with it — like saving it to a database or logging it out:

And map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. 
This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)


forEach example: 
let arr = ['a', 'b', 'c', 'd'];
arr.forEach((letter) => {
    console.log(letter);
});
// a
// b
// c
// d

map example :

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10

What we’re doing above is first mapping over arr 
and multiplying every element in the array times 2. 
After this, we filter through the array and only save the elements that are greater than 5.
 This leaves us with a final arr2 of [6,8,10].
*/


var ages5 = years.map(function(el) {
  return 2019 - el;
});

// map method creates a new array called ages5 

console.log(ages5);

// ES6
// We can use a better way , with arrow function and map method

// 3 WAYS TO WRITE ARROW FUNCTIONS 

// 1)


let ages6 = years.map(el => 2019 - el);

console.log(ages6);

/* So this one here is going to produce the exact same thing
as all of this piece of code up here.
So for a simple callback function like this here
with only one argument, it really is as simple as this.
So there's no function keyword, no return keyword,
no parenthesis nor curly braces,
all we need is the argument, the arrow,
and then what we have in our return statement.*/

// 2)

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016-el}.`);

console.log(ages6);


// 3)

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});

console.log(ages6);

/*Alright and again, I want more than one line of code,
and therefore I need to use these curly braces.
So let's create a variable here,
which is the current year, right?
So that it makes sense that we have more than one line.
Alright, and we can also calculate the eight here outside,
so let's say now minus the current element.
And then let me return this string that we had before.
So this one here.
And remember that in this case
I actually have to write out the return statement here,
the return keyword.
Now here I want age and that's it.*/


/*So there are three ways of writing arrow functions.
First one is put one argument and one line of code
and that's the simplest form.
If we then add another argument,
we know to use the parentheses.
And if we then add more lines of code,
more than one, then we have to use the curly braces
and the return keyword at the end.*/


// ARROW FUNCTIONS PART 2 Lexical This Keyword


// ES5
/*
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This box number ' + this.position + ' and it is ' 
      + this.color;
      alert(str);
    });
  }
}
box5.clickMe();
*/


/*So I'm now going to click on this box here.
And it says, this is box number undefined
and it's undefined.
Okay, so, why is this happening?
Why is it not reading our values from this object here?
So, green and one.
And the reason for that is something that I said
in the very beginning of the course,
and that is, that only the method call,
the this keyword, actually points to that object.
But in a regular function call, the this keyword
will always point to the global object,
which, in the case of the browser, is the window object.
And that is exactly what happens here.
So, this clickMe method is a function attached to an object.
So it's a method, and so in here,
we have access to the color and to position
by using the this keyword, right?
But then, this callback function that we have here
and this event handler here is not a method,
it's a regular function call, and therefore,
the this keyword here does not point to this box5 object,
but instead, it points to the window object.
And, of course, position and color
are not defined in the window object.
And therefore, what we have here
is undefined for both of these.

Now, a very common pattern to avoid this
is to simply create a new variable 
and store the this variable in that new variable like this.*/

/*
  var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This box number ' + self.position + ' and it is ' 
      + self.color;
      alert(str);
    });
  }
}
box5.clickMe();
*/


// ES6 way to make this same arrow function

/*const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    
    document.querySelector('.green').addEventListener('click',() => {
      var str = 'This box number ' + this.position + ' and it is ' 
      + this.color;
      alert(str);
    });
  }
}
box6.clickMe();
*/

// another example for the blue box with arrow function


const box6 = {
  color: 'blue',
  position: 2,
  clickMe: function () {
    document.querySelector('.blue').addEventListener('click', () => {
      var string = `The color of this box is ${this.color} and its position is ${this.position}`;
      alert(string);
    });
  }
}

box6.clickMe();

/* Remember that when we don't have any arguments
or if we have more than one argument,
we have to specify the parenthesis.
So we do that, then the arrow,
and then our function body, which is this.
And it's actually as simple as this.
So now, in here we have a function
that shares the this keyword with its surrounding*/

// THE ARROW FUNCTION SHARES THE LEXICAL THIS KEYWORD OF ITS SURROUNDING

/*function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(function(el)
  {
    return this.name + ' is friend with ' + el;
  }.bind(this));
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
*/
// instead of var self , we can also use bind method to copy, and that will work !


// ES6 Way

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends6 = function (friends) {
  let arr = friends.map(el => 
    `${this.name} is friend with ${el}`);
  console.log(arr);
};

let friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);




