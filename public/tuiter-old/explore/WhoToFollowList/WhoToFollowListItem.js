const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class= "row">
            <div class="col-xxl-2 col-xl-2 col-lg-2 px-0">
                <img src="${who.avatarIcon}" class="wd-profile-pic">
            </div>
            <div class="col-xxl-8 col-xl-7 col-lg-6">
                <div class="fw-bold">
                 ${who.userName} <i class="fas fa-check-circle"></i></div>
                <div>@${who.handle}</div>
                <button type="submit" class="rounded-pill btn btn-primary position-absolute bg-blue fw-bold text-text border-0 wd-follow">
                    Follow
                </button>
            </div>
            </div>
        </li>

    `);
}
export default WhoToFollowListItem;