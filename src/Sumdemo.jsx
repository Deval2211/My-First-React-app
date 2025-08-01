import React from "react";  
function Sumdemo(){

    const [no1,setno1] = React.useState(0)
    const [no2,setno2] = React.useState(0)
    const [choice,setchoice] = React.useState("")
    const [ans, setans] = React.useState("")
    
    const doSum =()=>{
        if (choice == "add"){
            var c = parseInt(no1) + parseInt(no2)
            setans("Sum is "+c)
        }else if (choice == "sub"){
            var c = parseInt(no1) - parseInt(no2)
            setans("Sum is "+c)
        }else {
            setans("Select Choice")
        }
    }
    return(<div style={{ padding: "20px" }}>
        no1:<input type="text" onChange={(e)=>setno1(e.target.value)}/>
        no2:<input type="text" onChange={(e)=>setno2(e.target.value)}/>
        Choice:
        <input type="radio" onChange={()=>setchoice("add")} name= "txt1" value="add"/>+
        <input type="radio" onChange={()=>setchoice("sub")} name= "txt1" value="sub"/>-
        Choice:<select onChange={(e)=>setchoice(e.target.value)}>
            <option value="add">Add</option>
            <option value="sub">Sub</option>
        </select>
        <input type="button" onClick={doSum} value="Click Me"/>
        {ans}
    </div>)

}

export default Sumdemo