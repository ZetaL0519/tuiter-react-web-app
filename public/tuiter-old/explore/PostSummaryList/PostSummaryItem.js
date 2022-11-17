const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item wd-custom-border">
            <div class="wd-post-with-image">
                <div class="wd-topic">
                   ${post.topic}
                </div>
                <div class="wd-author">
                    ${post.userName} <i class="fas fa-check-circle"></i>
                    <span class="wd-time">- ${post.time}</span>
                </div>
                <div class="wd-content">
                    ${post.title}
                </div>
                <div class="wd-topic">
                    ${post.tweets}
                </div>
            </div>
            <div class="wd-posts-image-container">
                <img src="${post.image}" class="img-fluid wd-post-image">
            </div>
        </li>
    `);
}

export default PostSummaryItem;