import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h1>This is Home Page</h1>
            <h1>I have got {posts.length} posts.</h1>
            {
                posts.map(post => <Post post ={post}>{post}</Post>)
            }
        </div>
    );
};

export default Home;