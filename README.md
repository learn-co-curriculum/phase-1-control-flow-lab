# JavaScript Flow Control Lab

## Overview
In this code-along, we will practice working with flow control in Javascript.

## Objectives
1. Practice writing if-else if-else statements in JS
2. Practice with ternary operators in JS
3. Practice writing switch statements in JS

## Introduction
You have been hired as a contractor for Scuber - a burgeoning startup that helps busy parents transport their children to and from all of their activities on scooters.

Scuber's drivers charge their passengers a different amount based on how far they need to travel, modify the index.js file to ensure that Scuber's drivers are properly telling their passengers how much the ride will cost.    

***NOTE***: Beware a gotcha!  In Javascript, you cannot express between by saying that something is both greater  than and less than some values.  Observe the following:

```javascript
2 <  5 < 4
// true

// You may think that the following expression would evaluate to false, because 5 is greater than 4.  However, Javascript does not evaluate this as you expect.
```

## Instructions
There are three functions you need to fill in.

* scuberGreetingForFeet: Use a `if` and `else if` statements to return the correct greeting based on the distance the passenger desires to travel.

* ternaryCheckCity: Use a ternary operator to return the correct response based on the desired destination of the passenger.

* switchOnCharmFromTip: Use a switch statement to return a different response based on the generosity of the passenger's trip.

***NOTE***: Remember, each time you save the index.js file the test suite in your browser will automatically re-run itself and push the results to Learn. When all of the tests are passing at the end of the code-along, the `Run Local Tests` light on the Learn.co lesson page will turn green.
