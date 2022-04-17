import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getUsers} from "../../services/getUsers";
import {Table} from "antd";
import {userTableConstants} from "../../helpers/tableConstants/tableConstants";

const Users: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsers())

    }, [])
    const {users, error, isLoading} = useAppSelector(state => state.userReducer)



    return (
        <div>
            <Table  dataSource={users} columns={userTableConstants} />
        </div>
    );
};

export default Users;
