# Uncommon JavaScript Error: Handling Null or Undefined 'length' Property

This repository demonstrates a common JavaScript error and its solution. The error occurs when trying to access the `length` property of an object that is null or undefined.

## Problem

The provided `bug.js` code attempts to access the `length` property of a variable that might be null. If this happens, the code throws a `TypeError: Cannot read properties of null (reading 'length')`.

## Solution

The `bugSolution.js` demonstrates how to handle this potential error by checking if the variable is null or undefined before accessing the `length` property.  It uses a short-circuiting logical AND (`&&`) to only evaluate the second operand if the first is truthy.