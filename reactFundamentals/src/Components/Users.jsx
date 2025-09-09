import React, { Component } from 'react';

class Users extends React.Component {
    state = {
        name: "Rohini Mali"
    }
    ChangeName = (newName) => {
        this.setState({ name: newName })
    }
    render() {


        return (
            <div>
                <h3>Name: {this.state.name}</h3>
                <input type="button" onClick={ this.ChangeName.bind(this,"Mrs.Rohini Honakuppe")} value="Change Name" />

                {/* <input type="button" onClick={()=>this.ChangeName("Rohini Honakuppe")}  value="Change Name" /> */}
            </div>
        )

        // if ((this.props.name) && (this.props.age)) {

        //     return (
        //         <div>
        //             <h4>{this.props.header}</h4>
        //             <h1>Name: {this.props.name} | Age:{this.props.age}</h1>
        //             <h4>{this.props.footer}</h4>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <h2>Invalid data</h2>
        //         </div>
        //     )
        // }

    }
}
Users.defaultProps = {
    header: "Header Here",
    footer: "Footer Here"
}

export default Users;