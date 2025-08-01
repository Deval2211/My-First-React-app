import React from 'react';
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter:1};
    }
    incrementData(){
        if (this.state.counter>=5){
            this.setState({msg:"Sorry value is >5"})
        }else{
            this.setState({counter:this.state.counter+1,msg:""})
        }
    }
    decrementData(){
        if (this.state.counter<=0){
            this.setState({msg:"Sorry value is <0"})
        }else{
            this.setState({counter:this.state.counter-1,msg:""})
        }
    }
    render(){
        return(
            <div style={{ padding: "20px" }}>
                <h1>Counter App</h1>
                Counter value is {this.state.counter} <br/>
                <input type="button" value="+" onClick={this.incrementData.bind(this)} />
                <input type="button" value="-" onClick={this.decrementData.bind(this)} />
                <br/>
                <p stylte={{color:"red"}}>{this.state.msg}</p>
            </div>
        )
    }
}

export default Counter;