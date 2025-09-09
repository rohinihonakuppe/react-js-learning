import React from 'react';
const User = (props) => {
//     let name = props.name?props.name:"Unknown";
//     if(props.children){
//     return (
//         <div>
//             <h2>Name: {props.name} | Age: {props.children}</h2>
//         </div>
//     )
// }else{
//     return (
//         <div>
//             <h2>Invalid data</h2>
//         </div>
//     )
// }

  return (
        <div>
            <h2>Name: {props.name} | Age: {props.children}</h2>
        </div>
    )

}
export default User;