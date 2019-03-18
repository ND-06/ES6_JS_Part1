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

{

    let a = 10;
const b = 15;

}

console.log(a);
// We can see that ours variables a and b are not visible from outside the block
// in ES6, we can create a new block with a for loop, an if else statement, a function but also
// only with {} symbols , thats means all code included inside our {} is not accessible from outside



// ES5 

// In ES5 , we have to create an IIFE in order to make our data privacy like this

(function() {

var c = 19;

})

console.log(c);