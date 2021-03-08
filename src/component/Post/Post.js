import React from 'react';
import { useHistory } from 'react-router';
import './Post.css'

const Post = (props) => {
    const {id, title, body} = props.post;

    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div className ="style">
            <h1>ID: {id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick ={() => showComments(id)}>Show Comment</button>
        </div>
    );
};

export default Post;