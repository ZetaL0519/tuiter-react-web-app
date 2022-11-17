const NavigationSidebar = (active) => {
 return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a href="../HomeScreen/index.html" style="text-decoration:none">
       ${active === 'home'? `<li class="list-group-item active">` : `<li class="list-group-item">`}
           <div class="row">
                <div class="col-1">
                    <i class="fa fa-home"></i>
                </div>
                <span class="col-xxl-10 col-xl-10 d-xl-block d-none"> Home</span>
           </div>
       </li>
     </a>
      <a href="../explore/index.html" style="text-decoration:none">
       ${active === 'explore'? `<li class="list-group-item active">` : `<li class="list-group-item">`}
        <div class="row">
             <div class="col-1">
                 <i class="fa fa-hashtag"></i>
             </div>
             <span class="col-xxl-10 col-xl-10 d-xl-block d-none"> Explore</span>
        </div>
        </li>
      </a>
     <a class="list-group-item" href="/">
       <div class="row">
            <div class="col-1">
                <i class="fa fa-bell"></i>
            </div>
            <span class="col-xxl-10 col-xl-10 d-xl-block d-none"> Notifications</span>
       </div>
     </a>
     <a class="list-group-item" href="/">
       <div class="row">
            <div class="col-1">
                <i class="fas fa-envelope"></i>
            </div>
            <span class="col-xxl-10 col-xl-10 d-xl-block d-none"> Messages</span>
       </div>
     </a>
     <a class="list-group-item" href="/">
       <div class="row">
            <div class="col-1">
                <i class="fas fa-bookmark"></i>
            </div>
            <span class="col-xxl-10 col-xl-10 d-xl-block d-none"> Bookmarks</span>
       </div>
     </a>
     <a class="list-group-item" href="/">
       <div class="row">
            <div class="col-1">
                <i class="fas fa-list"></i>
            </div>
            <span class="col-xxl-10 col-xl-10 d-xl-block d-none"> Lists</span>
       </div>
     </a>
     <a class="list-group-item" href="/">
       <div class="row">
            <div class="col-1">
                <i class="fas fa-user"></i>
            </div>
            <span class="col-xxl-10 col-xl-10 d-xl-block d-none"> Profile</span>
       </div>
     </a>
     <a class="list-group-item" href="/">
       <div class="row">
            <div class="col-1">
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <span class="col-xxl-10 col-xl-10 d-xl-block d-none"> More</span>
       </div>
     </a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;