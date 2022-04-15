import {RouterConstants} from "./routerConstants";
import Todos from "../pages/todos/todos";
import Posts from "../pages/posts/posts";
import Users from "../pages/users/users";

export const publicRoutes = [
    {
        path: RouterConstants.TODOS,
        component: <Todos/>,
        permission: [],
    },
    {
        path: RouterConstants.POSTS,
        component: <Posts/>,
        permission: []
    },
    {
        path: RouterConstants.USERS,
        component: <Users/>,
        permission: [],
    }
]
