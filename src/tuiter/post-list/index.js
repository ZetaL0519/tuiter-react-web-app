import React from "react";
import posts from './posts.json';
import PostItem
  from "./PostItem";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                posts.map(post =>
                <PostItem key={post._id} post={post}/>)
            }
        </ul>
    );
};

export default PostList;