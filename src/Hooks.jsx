import React from "react";  
function Hooks(){
    const [counter,setcounter] = React.useState(0)
    const [msg,setmsg] = React.useState("")

    const IncrementData = () =>{
        if (counter >= 5){
            setmsg("Sorry")
        }else{
            setcounter(counter + 1)
            setmsg("")

        }
    }
        const DecrementData = () =>{
        if (counter <= 0){
            setmsg("Sorry")
        }else{
            setcounter(counter - 1)
            setmsg("")

        }
    }
    return(<div style={{ padding: "20px" }}>
        <h1>Welcome to Hooks Demo</h1>
        <h1>Counter is {counter}</h1>
        <input type="button" value="+" onClick={IncrementData}/>
        <input type="button" value="-" onClick={DecrementData}/>
    </div>
    )
}
export default Hooks