import React from "react";
class Sum extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            no1: "",
            no2: "",
            msg: "",
            errmsg: {}
        };
    } 
    doValidation(){
        const {no1,no2} = this.state
        var temperr = {}
        var isValid = true
        if (!no1){
            temperr.txt1 =  "Enter No1"
            isValid = false
        }
        if (isNaN(no1)){
            temperr.txt1 =  "Enter Digit in No1"
            isValid = false
        }
        if (!no2){
            temperr.txt2 =  "Enter No2"
            isValid = false
        }
        if (isNaN(no2)){
            temperr.txt2 =  "Enter Digit in No2"
            isValid = false
        }
        this.setState({errmsg:temperr})
        return isValid
    }
    doSum(){
        var ans = this.doValidation()
        if (ans == true){
            var c = parseInt(this.state.no1) + parseInt(this.state.no2)
            this.setState({msg:c})
        }
    }
    render() { 
        return (
            <div style={{ padding: "20px" }}>
                <h1>Sum Demo</h1>

                No1:<input type='text' onChange={(e)=>this.setState({no1: e.target.value})}/>
                <p style={{ color: 'red' }}>{this.state.errmsg.txt1}</p>
                No2:<input type='text' onChange={(e)=>this.setState({no2: e.target.value})}/>
                <p style={{ color: 'red' }}>{this.state.errmsg.txt2}</p>
                <input type='button' value="+" onClick={this.doSum.bind(this)} /><br/>
                <p>Result: {this.state.msg}</p>
            </div>
        );
    }
}
 
export default Sum;