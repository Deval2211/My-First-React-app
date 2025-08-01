import React from 'react';
class Welcome extends React.Component {
 constructor(props){
        super(props);
        this.state = { };
    }
    render(){
        return (
            <div style={{ padding: "20px" }}>
                <h1>Welcome</h1>
            </div>
        );
    }
}
 
export default Welcome;