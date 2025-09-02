import {person} from './person.js'
class employee{
    showEmpInfo(){
        console.log('Employee Info');
        let obj = new person('test', 12345);
        obj.showPersoneInformation();
    }
}

export default employee;