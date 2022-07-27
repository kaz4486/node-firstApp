const os = require('os');
const fs = require('fs');

const genders = ['m', 'f'];
const maleNames = [
  'Janusz',
  'Piotr',
  'Maurycy',
  'Gniewomir',
  'Grzegorz',
  'Leonardo',
  'Zdzisław',
];
const femaleNames = [
  'Agnieszka',
  'Ewelina',
  'Natalia',
  'Patrycja',
  'Jowita',
  'Małgorzata',
];
const lastNames = ['Brzęczyszczykiewicz', 'Kiełbasa', 'DaVinci', 'Ronaldo'];

const randChoice = (arr) => {
  const drawedIndex = Math.floor(Math.random() * arr.length);

  const drawedElement = arr[drawedIndex];
  return drawedElement;
};

let people = [];
minAge = 18;
maxAge = 78;

for (let i = 0; i < 20; i++) {
  let identity = {};
  identity.gender = randChoice(genders);
  identity.firstName =
    identity.gender === 'f' ? randChoice(femaleNames) : randChoice(maleNames);
  identity.lastName = randChoice(lastNames);

  const getAge = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  identity.age = getAge(minAge, maxAge);

  const lowerFirstName =
    identity.firstName.charAt(0).toLowerCase() + identity.firstName.slice(1);

  const lowerLastName =
    identity.lastName.charAt(0).toLowerCase() + identity.lastName.slice(1);

  identity.mail =
    `${lowerFirstName}` + '.' + `${lowerLastName}` + '.' + 'gmail.com';

  people.push(identity);
}

const peopleJsonString = JSON.stringify(people);

fs.writeFile('people.json', peopleJsonString, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
