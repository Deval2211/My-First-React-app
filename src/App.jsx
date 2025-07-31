import About from "./About"
import Welcome from "./Welcome"
import Home from "./Home" 
import EventDemo from "./EventDemo"
import Counter from "./Counter"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
function App(){
    return(
        <>
            <Router>
                <Link to = '/About'>About</Link>
                <Link to = '/Welcome'>Welcome</Link>
                <Link to = '/Home'>Home</Link>
                <Link to = '/EventDemo'>EventDemo</Link>
                <Link to = '/Counter'>Counter</Link>
            
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Welcome" element={<Welcome/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/EventDemo" element={<EventDemo/>}/>
                    <Route path="/Counter" element={<Counter/>}/>
                    <Route path="*" element={<h1>404 Error</h1>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App