import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
import {deleteTuit} from "../reducers/tuits-reducer.js"

const TuitListItem = ({
    tuit = {
        _id: "123",
        topic: "Web Development",
        username: "ReactJS",
        liked: true,
        handle: "ReactJS",
        time: "2h",
        title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        profileImg: "./images/reactLogo.png",
        postImg: "",
        comments: 123,
        retuits: 234,
        likes: 345
    }
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (tuit) => {
        dispatch(deleteTuit(tuit));
    };
    return (
        <>
            <div className="list-group-item">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1">
                        <img src={tuit.profileImg} alt="" className="wd-profile-pic"/>
                    </div>

                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 mt-1 px-1">
                        <div>
                            <span className="fg-style-bold">{tuit.username}<i className="fa fa-check-circle"></i></span>
                            <span className="fg-color-gray"> {tuit.handle}</span>
                            <span className="fg-color-gray"> - {tuit.time}</span>
                            <br></br>
                            {tuit.tuit}
                        </div>

                        {tuit.postImg?
                        <div className="card post-card mt-2">
                             <img className="card-img-top card-picture" alt="" src={tuit.postImg}/>

                            {tuit.title && tuit.summary &&
                                <div className="card-body">
                                    {tuit.title && <h6 className="card-title">{tuit.title}</h6>}
                                    {tuit.summary && <div className="card-text fg-color-gray">{tuit.summary}</div>}
                                </div>
                            }
                        </div> : ""
                        }
                        <div className="row mt-3 mb-2">
                            <TuitStats tuit={tuit}/>
                        </div>

                    </div>

                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 mt-1">
                        <i onClick = {deleteTuitHandler} className="fa fa-times"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TuitListItem;
