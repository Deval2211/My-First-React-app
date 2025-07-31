function EventDemo(){
    const demo = () => {
        alert("Welcome")
    }

    const printData = (event) => {
        console.log(event.target.value)
    }

    return(
        <>
            <input type="button" onClick={demo} value= "Clickme"/>
            <input type="button" onClick={printData} value= "Clickme"/>
            <input type="text" onChange={printData} name= "txt"/>
        </>
    )
}

export default EventDemo;