# Control Flow Lab

## Overview
In this code-along, we will practice working with control flow in JavaScript.

## Objectives
1. Practice writing `if...else if...else` statements.
2. Practice working with the ternary operator.
3. Practice writing `switch` statements.

## Introduction
You have been hired as a contractor for Scuber — a burgeoning startup that helps busy parents transport their children to and from all of their activities on scooters.

Scuber's drivers charge their passengers a different amount based on how far they need to travel. Modify the `index.js` file to ensure that Scuber's drivers are properly telling their passengers how much the ride will cost.

***NOTE***: Beware a gotcha! In JavaScript, you cannot express the concept of 'between' in the following way:
```js
2 < 5 < 4
// => true
```

It seems like that expression should evaluate to `false` because `5` is not less than `4`. However, we're forgetting about the order of operations — let's think about how the JavaScript engine evaluates that expression. First, the engine compares `2 < 5`, which evaluates to `true`. At that point, it's as though the value `true` has replaced `2 < 5` in the expression, resulting in `true < 4`. The engine sees that we're trying to compare a non-number (`true`) against a number (`4`), and under the hood it converts `true` into a number:
```js
Number(true);
// => 1
```

That leaves us with `1 < 4`, which the JavaScript engine correctly evaluates to `true`. Can you figure out how to properly evaluate whether `5` is greater than `2` **AND** `5` is less than `4`? Ponder that as you work through the assignment below.

## Instructions
There are three functions you need to fill in:
* `scuberGreetingForFeet()` — Use `if` and `else if` statements to return the correct greeting based on the distance the passenger desires to travel.
* `ternaryCheckCity()` — Use a ternary operator to return the correct response based on the desired destination of the passenger.
* `switchOnCharmFromTip()` — Use a `switch` statement to return a different response based on the generosity of the passenger's tip.

***NOTE***: Remember, each time you save the `index.js` file the test suite in your browser will automatically re-run itself and push the results to Learn. When all of the tests are passing at the end of the lab, the `Run Local Tests` light on the Learn.co lesson page will turn green.

Good luck!
