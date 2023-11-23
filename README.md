# Class 12

## Installation Steps
Step 1.
npm install --save-dev jest

Step 2.
Create a JavaScript folder at the root of your project. In this javascript folder create a file called sum
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Step 3. 
Create a folder at the root of your project called __test__ and a file inside called registration.test.js
```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Step 4.
In the package.json add in the following script which contains test of jest:
```
"scripts": {
    "test": "jest"
}
```

Step 5
Run your test using the following command:
npm test

