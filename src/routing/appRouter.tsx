import {Routes, Route} from "react-router-dom";
import {publicRoutes} from "./routing";



function AppRouter(){
    return(
        <Routes>
            {publicRoutes.map(route=>(
                <Route key={route.path} element={route.component} path={route.path}/>
            ))}
        </Routes>
    )
}

export default AppRouter
