const firstNames = [
  ['Henry', 'William', 'Louis'],
  ['Mary', 'Laura', 'Veronica']
];

const secondNames = [
  ['Peter', 'Fred', 'Matthew'],
  ['Elizabeth', 'Helena', 'Aurora']
];

const thirdNames = ['de la Mare', 'de la Grande Valee', 'The Third'];

const output = document.querySelector('.generated-name');
const radios = document.getElementsByName('number');
const genders = document.getElementById('genders');
const btn_generate = document.querySelector('.btn-generate');
         
btn_generate.addEventListener('click', function() {
let selectedRadio = '';
let selectedGender = '';

for(var i = 0; i < radios.length; i++) {
  if(radios[i].checked) {
    selectedRadio = radios[i].value;
  }
}

for(var i = 0; i < genders.length; i++) {
  if(genders[i].selected) {
    selectedGender = genders[i].value;
  }
}

let genderID = selectedGender === 'Male' ? 0 : 1 ;

switch(selectedRadio) {

  case 'one':
    output.value = firstNames[genderID][Math.floor(Math.random() * firstNames[genderID].length)];
    break;
  case 'two':
    output.value = firstNames[genderID][Math.floor(Math.random() * firstNames[genderID].length)]
      + ' ' + secondNames[genderID][Math.floor(Math.random() * secondNames[genderID].length)];
    break;
  case 'three':
    output.value = firstNames[genderID][Math.floor(Math.random() * firstNames[genderID].length)]
      + ' ' + secondNames[genderID][Math.floor(Math.random() * secondNames[genderID].length)]
    + ' ' + thirdNames[Math.floor(Math.random() * thirdNames.length)];
    break;
}
});
