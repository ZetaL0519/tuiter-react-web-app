import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostList = () => {
    return (`
        <div class="list-group">
            ${posts.map(p=> {
                return PostSummaryItem(p);
            }).join('')}
        </div>
    `);
}
export default PostList;