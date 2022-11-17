import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import PostSummaryList from "../explore/PostSummaryList/index.js";
import PostList from "./PostList.js"

function exploreComponent() {
   $('#wd-explore').append(`
       <h2>Home Page</h2>
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
    ${NavigationSidebar('home')}
   </div>
   <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 text-white">
    ${PostList()}
   </div>
   <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-sm-none d-md-none d-lg-block text-white">
        ${PostSummaryList()}
   </div>
  </div>
   `);
}
$(exploreComponent);