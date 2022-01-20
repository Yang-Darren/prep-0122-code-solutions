function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(4, 4);
console.log('addTwoNumbersResult exercise', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResults = convertHoursToMinutes(2);
console.log('convertHoursToMinutesResults exercise', convertHoursToMinutesResults);

function getGreeting(name) {
  return '"Hello ' + name + '!"';
}
console.log('getGreeting Exercise:', getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log('getCircleCircumference Exercise:', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log('getFullName Exercise:', getFullName('Juan', 'Ramirez'));

function cube(number) {
  return Math.pow(number, 3);
}
console.log('cube Exercise:', cube(5));
