
export class person{
    constructor(pname,pId){
        this.PersonName = pname;
        this.PersonId = pId;
    }
    showPersoneInformation(){
        console.log(`Name Is: ${this.PersonName}`);
        console.log(`Id Is: ${this.PersonId}`);

    }
}
let p1 = new person("Rohini", 102);
p1.showPersoneInformation();