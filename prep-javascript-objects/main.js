var person = {
  firstName: 'Darren',
  lastName: 'Yang',
  hobby: 'Running'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
person.job = 'data analyst';
person.previousjob = 'personnel analyst';

console.log("The person's name is:" + fullName);
console.log("The person's current job is: " + person.job);
console.log("The person's previous job is:" + person.previousjob);
console.log(person);
