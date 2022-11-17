const PostSummaryItem = (posts) => {
    return (`
        <div class="list-group-item ">
            <div class="row">
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                    <img src="${posts.profileimage}" class="wd-profile-pic" width="50px" height="50px">
                </div>
                <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 p-0">
                    <span>${posts.username}</span>
                    <i class="fas fa-check-circle"></i>
                    <span class="wd-time">${posts.handle}</span>
                    <span class="wd-time">${posts.time}</span>
                    </br>
                    <span> ${posts.content}</span>

                    <div class="card post-card mt-2">
                        ${posts.cardTitle && posts.cardBody ? `
                        <img class="card-img-top card-picture wd-custom-border" src=${posts.cardImage} alt="...">

                        <div class="card-body wd-custom-border wd-bottom-radius">
                            ${posts.cardTitle ? `<h6 class="cardTitle">${posts.cardTitle}</h6>`: ""}
                            ${posts.cardBody ? `<p class="card-text fg-color-gray">${posts.cardBody}</p>`: ""}
                        </div>`: `<img class="card-img-top card-picture wd-custom-border" src=${posts.cardImage} style="border-radius: 18px">`
                        }
                    </div>

                    <div class="row mt-3 mb-2">
                        <div class="col-3">
                            <i class="fa fa-comment-o mx-2 wd-interaction"></i>
                            <span>${posts.commentNum}</span>
                        </div>

                        <div class="col-3">
                            <i class="fa fa-retweet wd-interaction"></i>
                            <span>${posts.shareNum}</span>
                        </div>

                        <div class="col-3">
                            <i class="fa fa-heart wd-like"></i>
                            <span>${posts.heartNum}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    `);
}
export default PostSummaryItem;