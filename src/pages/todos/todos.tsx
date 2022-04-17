import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getTodos} from "../../services/getTodos";
import {Table} from "antd";
import {todosTableConstants} from "../../helpers/tableConstants/tableConstants";

const Todos: FC = () => {
    const dispatch = useAppDispatch();
    const {todos, error, isLoading} = useAppSelector(state => state.todosReducer)
    useEffect(() => {
        dispatch(getTodos())
    }, [])

    return (
        <div>
            <Table dataSource={todos} columns={todosTableConstants}/>
        </div>
    );
};

export default Todos;
