let person = {personName:'Rashit', PersonId: 102}
person.PersonId =103;
console.log(person);

let personobj = {...person, address:'Mumbai'}
personobj.PersonId = 105;
console.log(personobj)