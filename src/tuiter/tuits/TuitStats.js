import React from "react";
import {useDispatch} from "react-redux";

import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="col wd-icon-size">
                <span>
                <i className="far fa-comment mx-2 fg-color-gray"></i>{tuit.comments}
                </span>
            </div>

            <div className="col wd-icon-size">
                <span>
                    <i className="fa fa-retweet mx-2 fg-color-gray"></i>{tuit.retuits}
                </span>
            </div>

            <div className="col">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))}
                   className="bi bi-heart-fill me-2 text-danger"></i>
                {tuit.likes}
            </div>
            <div className="col">
                <i onClick={() => {
                dispatch(updateTuitThunk({

                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))} }
                    className="fa fa-thumbs-down me-2"></i>
                {tuit.dislikes}
            </div>

            <div className="col wd-icon-size">
                <i className="fa fa-share-alt mx-2 fg-color-gray"></i>
            </div>
        </>
    )
}
export default TuitStats;