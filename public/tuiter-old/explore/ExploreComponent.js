import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11 ">
                    <div class="input-group wd-search-bar position-relative">
                        <span class="px-3 wd-search-icon" ><i class="mt-2 pt-1 fa fa-search"></i></span>
                        <input type="text" class="form-control" placeholder="Search Twitter" >
                    </div>
                </div>

                <div class="col-1 mt-1">
                    <a href="explore-settings.html"><i class="wd-gear fa fa-cog"></i></a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link " href="#">Entertainment</a>
                </li>
           </ul>
            <div class="position-relative">
                <img src="../../images/Starship.webp" width="100%">
                <label class="wd-image-text fw-bold">SpaceX's Starship </label>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
