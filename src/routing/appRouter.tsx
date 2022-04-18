import {Navigate, Route, Routes} from "react-router-dom";
import {protectedRoutes, publicRoutes} from "./routing";
import {useAppSelector} from "../hooks/redux";
import {RouterConstants} from "./routerConstants";


function AppRouter() {
    const user = useAppSelector(state => state.userLoginReducer)
    console.log(user);
    return (
        <Routes>
            {user.isAuth && protectedRoutes.map(route =>
                <Route key={route.path} element={route.component} path={route.path}/>
            )}
            {!user.isAuth && publicRoutes.map(route =>
                (<Route key={route.path} element={route.component} path={route.path}/>)
            )}
            {!user.isAuth && (<Route path='*' element={<Navigate to={`/${RouterConstants.LOGIN_ROUTE}`}/>}/>)}
        </Routes>
    )
}

export default AppRouter
