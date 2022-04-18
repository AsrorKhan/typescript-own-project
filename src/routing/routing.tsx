import {RouterConstants} from "./routerConstants";
import Todos from "../pages/todos/todos";
import Posts from "../pages/posts/posts";
import Users from "../pages/users/users";
import Login from "../pages/login/login";

export const protectedRoutes = [
    {
        path: RouterConstants.TODOS_ROUTE,
        component: <Todos/>,
        permission: [],
    },
    {
        path: RouterConstants.POSTS_ROUTE,
        component: <Posts/>,
        permission: []
    },
    {
        path: RouterConstants.USERS_ROUTE,
        component: <Users/>,
        permission: [],
    }
]


export const publicRoutes = [
    {
        path: RouterConstants.LOGIN_ROUTE,
        component: <Login/>,
        permission: [],
    },
]
