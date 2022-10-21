import React from "react";
const PostSummaryItem = (
 {
   post = {
    "_id": 123,
    "topic": "Web Development",
    "userName": "ReactJS",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "time": "2h",
    "image": "reactLogo.png",
    "tweets": ""
   }
 }
) => {
 return(
  <li className="list-group-item wd-custom-border">
   <div className="wd-post-with-image">
     <div className="wd-topic">
       {post.topic}
     </div>
     <div className="wd-author">
        {post.userName} <i className="fas fa-check-circle"></i>
        <span className="wd-time"> - {post.time}</span>
     </div>
     <div className="wd-content">{post.title}</div>
     <div className="wd-topic">{post.tweets}</div>
     </div>
     <div className="wd-posts-image-container">
       <img className="img-fluid wd-post-image" alt="" src={`/images/${post.image}`}/>
     </div>

  </li>
 );
};
export default PostSummaryItem;