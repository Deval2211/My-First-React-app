// import './Trial.css';
import wp from './973967.jpg'
import React from 'react';
class Home extends React.Component {
 constructor(props){
        super(props);
        this.state = { };
    }
    render(){
        var a = 10
    var b = 20
    var mycolor = {color : 'white', backgroundColor: "green"}
    return (
        <div style={{ padding: "20px" }}>
            <h1>Home</h1>
            A value is {a} <br/>
            B value is {b}
            <p style ={mycolor}>I am P tag</p>
            <img src={wp} width = {1520}/>
        </div>
    ) 
    }
}
 
// function Home(){
//     var a = 10
//     var b = 20
//     var mycolor = {color : 'white', backgroundColor: "green"}
//     return (
//         <>
//             <h1>Home</h1>
//             A value is {a} <br/>
//             B value is {b}
//             <p style ={mycolor}>I am P tag</p>
//             <imp src={wp}/>
//         </>
//     ) 
// }

export default Home;