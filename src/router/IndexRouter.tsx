import { createHashRouter, Navigate } from "react-router-dom";
import App from "../App";
import Login from "../views/login/Login";
import Home from "../views/sandbox/home/Home";
import NewsSandBox from "../views/sandbox/NewsSandBox";
import RightList from "../views/sandbox/right-manage/RightList";
import RoleList from "../views/sandbox/right-manage/RoleList";
import UserList from "../views/sandbox/user-manage/UserList";

export default createHashRouter([
    {
        path: '/',
        element: <NewsSandBox />,
        children: [
            {
                path: 'home',
                index: true,
                element: <Home />
            },
            {
                path: 'user-manage/list',
                element: <UserList />
            },
            {
                path: 'right-manage',
                children: [
                    {
                        index: true,
                        path: 'role/list',
                        element: <RoleList />
                    },
                    {
                        path: 'right/list',
                        element: <RightList/>
                    }
                ]
            },
            {
                path: '*',
                element: <Navigate to='/home'/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
])