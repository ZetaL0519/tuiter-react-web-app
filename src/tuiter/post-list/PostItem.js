import React from "react";

const PostItem = (
    {
        post = {
            "profileImg": "Starship.webp",
            "author": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "tuit": 'Amazing show about <a href="https://twitter.com/inspiration4x" style="ext-decoration:none">@Inspiration4x</a> mission!',
            "postImg": "inspiration4.jpg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Offical Site",
            "summary": "From traing to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...\n netflix.com",
            "commentCount": "4.2K",
            "retweetCount": "3.5K",
            "likeCount": "37.5K"
        }
    }) => {
    return (
        <>
        <div className="list-group-item post-item-background">
        <div className="row">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1">
                <img src={`/images/${post.profileImg}`} alt="" className="wd-profile-pic"/>
            </div>

            <div className=" col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 mt-1 px-1">
                <div>
                    <span className="fg-style-bold">{post.author} <i className="fa fa-check-circle"></i></span>
                    <span className="fg-color-gray"> @{post.handle}</span>
                    <span className="fg-color-gray"> - {post.time}</span>
                    <br></br>
                    <div dangerouslySetInnerHTML={{ __html: post.tuit}} />
                </div>

                <div className="card post-card mt-2">

                    <img className="card-img-top card-picture" alt="" src={`/images/${post.postImg}`}/>

                    {post.title && post.summary ?
                        <div className="card-body">
                            {post.title ? <h6 className="card-title">{post.title}</h6>: ""}
                            {post.summary ? <div className="card-text fg-color-gray"><div dangerouslySetInnerHTML={{ __html: post.summary}}/></div>: ""}
                        </div>

                        : ""
                    }

                </div>

                <div className="row mt-3 mb-2">
                    <div className="col-3 wd-icon-size">

                        <span><i className="far fa-comment mx-2 fg-color-gray"></i>{post.commentCount}</span>
                    </div>

                    <div className="col-3 wd-icon-size">
                        <span><i className="fa fa-retweet mx-2 fg-color-gray" ></i>{post.retweetCount}</span>
                    </div>

                    <div className="col-3 wd-icon-size">

                        <span><i className="fa fa-heart mx-2 fg-color-red"></i>{post.likeCount}</span>
                    </div>

                    <div className="col-3 wd-icon-size">
                        <i className="fa fa-share-alt mx-2 fg-color-gray" ></i>
                    </div>
                </div>

            </div>
        </div>

        </div>
    </>
    );
}
export default PostItem;