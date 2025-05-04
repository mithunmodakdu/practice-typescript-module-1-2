type Person = {
  name: string;
  address: string; 
  hairColor: string;
  eyeColor: string;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: string[];
  job: string;
  skills: string[];
  maritalStatus: 'married'|'unmarried';
  friends: string[]
}

const person: Person = {
  name: 'Mithun',
  address: 'Mymensingh',
  hairColor: 'black',
  eyeColor: 'white and black',
  income: 30000,
  expense: 28000,
  hobbies: ['listening story', 'reading books'],
  familyMembers: ['Moni', 'Mrinmoyee'],
  job: 'Web Developer',
  skills: ['HTML5', "CS3", "ES6", 'React'],
  maritalStatus: 'married',
  friends: ['Paul Mithun', 'Probash']

}