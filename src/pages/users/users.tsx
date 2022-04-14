import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getUsers} from "../../services/getUsers";

const Users: FC = () => {
    useEffect(() => {
        dispatch(getUsers())

    }, [])
    const dispatch = useAppDispatch()
    const {users} = useAppSelector(state => state.userReducer)


    return (
        <div>
            {users.map(user=>
                <div>Name: {user.name}</div>
            )}
        </div>
    );
};

export default Users;
