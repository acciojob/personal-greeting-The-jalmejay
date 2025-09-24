
import React, {useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [name ,setname]=useState("");
  
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
            <label htmlFor="name">Enter your name :</label>
            <input type="text" name="name" onChange={(e)=>setname(e.target.value)} />
        </form>
        {name&& <p>Hello, {name}!</p>}
    </div>
  )
}

export default App
