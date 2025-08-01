import About from "./About"
import Welcome from "./Welcome"
import Home from "./Home" 
import EventDemo from "./EventDemo"
import Counter from "./Counter"
import Sum from "./Sum"
import Sumdemo from "./Sumdemo"
import Hooks from "./Hooks"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
function App(){
    return(
        <>
            <Router>
                <div style={{ padding: "20px" }}>
                    <Link to = '/About' style={{ margin: "0 10px" }}>About</Link>
                    <Link to = '/Welcome' style={{ margin: "0 10px" }}>Welcome</Link>
                    <Link to = '/Home' style={{ margin: "0 10px" }}>Home</Link>
                    <Link to = '/EventDemo' style={{ margin: "0 10px" }}>EventDemo</Link>
                    <Link to = '/Counter' style={{ margin: "0 10px" }}>Counter</Link>
                    <Link to = '/Sum' style={{ margin: "0 10px" }}>Sum</Link>
                    <Link to = '/Sumdemo' style={{ margin: "0 10px" }}>Sumdemo</Link>
                    <Link to = '/Hooks' style={{ margin: "0 10px" }}>Hooks</Link>
                </div>
            
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Welcome" element={<Welcome/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/EventDemo" element={<EventDemo/>}/>
                    <Route path="/Counter" element={<Counter/>}/>
                    <Route path="/Sum" element={<Sum/>}/>
                    <Route path="/Sumdemo" element={<Sumdemo/>}/>
                    <Route path="/Hooks" element={<Hooks/>}/>
                    <Route path="*" element={<h1>404 Error</h1>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App