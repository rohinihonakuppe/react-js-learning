import { Component } from "react";
import User from "./User";
class Student extends Component {
    state = {
        title: "Student List",
        StudentList: [
            { name: "Rohit Sharma", age: 15 },
            { name: "Virat Kohali", age: 15 },
            { name: "D Kartik", age: 18 },
            { name: "MS D", age: 14 }

        ]
    }
    doclickme =() =>{
        console.log("Button Clicked");
        const newState = this.state.StudentList.map((User) =>{
            const tempuser = User;
            tempuser.age += 5;
            return tempuser;
            
        })
        // this.setState({
        //     StudentList : [
        //         { name: "Rohit Sharma", age: this.state.StudentList[0].age + 5 },
        //         { name: "Virat Kohali", age: this.state.StudentList[1].age + 5 },
        //         { name: "D Kartik", age: this.state.StudentList[2].age + 5 },
        //         { name: "MS D", age: this.state.StudentList[3].age + 5 }  ]
        // })
        this.setState({newState})
    }
    render() {

        return (
            <div>
                <h1>{this.state.title}</h1>
                <User name={this.state.StudentList[0].name}>{this.state.StudentList[0].age}</User>
                <User name={this.state.StudentList[1].name}>{this.state.StudentList[1].age}</User>
                <User name={this.state.StudentList[2].name}>{this.state.StudentList[2].age}</User>
                <User name={this.state.StudentList[3].name}>{this.state.StudentList[3].age}</User>
                <input type="button" onClick={this.doclickme} value="Increase student age by 5 years" />

            </div>
        )
    }
}

export default Student;