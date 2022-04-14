import React, {useEffect} from 'react';
import './App.css';
import Users from "./pages/users/users";
import Sidebar from "./component/sidebar/sidebar";

function App() {
    return (
        <div className="App">
           <Sidebar/>
        </div>
    );
}

export default App;
