import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import Comment from "../Comment/Comment";

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
      <div>
        <h1>Post Detail for: {id}</h1>
        <h3>Posted By: {post.id}</h3>
        <h1>{post.title}</h1>
        <h3>Comment: {comments.length}</h3>
        {
            comments.map(comment => <Comment comment= {comment}>{comment}</Comment>)
        }
      </div>
    );
};

export default PostDetail;