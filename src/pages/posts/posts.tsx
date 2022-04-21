import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getPosts} from "../../services/getPosts";
import {Table} from "antd";
import {postTableConstants} from "../../helpers/tableConstants/tableConstants";

const Posts: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
    dispatch(getPosts())

    }, [])

    const {posts, isLoading, error} = useAppSelector(state => state.postReducer)
    return (
        <div>
            <Table rowKey={'key'} dataSource={posts} columns={postTableConstants} />
        </div>
    );
};

export default Posts;
