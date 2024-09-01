import React, {useState} from "react";
import Display from "./Display";
import Posts from "./Posts";

function App() {
    const [location, setLocation] = useState("Berlin");
    const [isClicked, setIsClicked] = useState(false);

    function handleChange(e){
        const value = e.target.value;
        setLocation(value);
    }
    return <div className="container">
        <h1 className="title">Welcome to my weather app!</h1>
        <input onChange={handleChange} type="text" name="location" placeholder="search your city" value={location}/>
        <button onClick={(e) => {
            setIsClicked((prev) => {
                return !prev;
            });
            e.preventDefault();
        }}>{isClicked ? "Hide" : "Search"}</button>
        {/* {isClicked && <Display location={location} />} */}
        {isClicked && <Posts />}
        
    </div>

}

export default App;