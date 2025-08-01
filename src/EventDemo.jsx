function EventDemo(){
    const demo = () => {
        alert("Welcome")
    }

    const printData = (event) => {
        console.log(event.target.value)
    }

    return(
        <div style={{ padding: "20px" }}>
            <input type="button" onClick={demo} value= "Clickme"/>
            <input type="button" onClick={printData} value= "Clickme"/>
            <input type="text" onChange={printData} name= "txt"/>
        </div>
    )
}

export default EventDemo;