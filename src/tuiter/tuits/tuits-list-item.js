import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitListItem = ({
    tuit = {
        "_id": 123,
        "topic": "Space",
        "username": "SpaceX",
        "handle": "@spacex",
        "time": "2h",
        "image": "spacex.png",
        "title": "SpaceX's Mission",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
        "liked": true,
        "likes": 2345,
        "replies": 123,
        "retuits": 432
    }
}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    };
    return (
        <>
            <div className="list-group-item">
                <div className="row">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1">
                        <img src={`/images/${tuit.image}`} alt="" className="wd-profile-pic"/>
                    </div>

                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 mt-1 px-1">
                        <div>
                            <span className="fg-style-bold">{tuit.username}<i className="fa fa-check-circle"></i></span>
                            <span className="fg-color-gray"> {tuit.handle}</span>
                            <span className="fg-color-gray"> - {tuit.time}</span>
                            <br></br>
                            {tuit.tuit}
                        </div>

                        <div className="row mt-3 mb-2">
                            <TuitStats key={tuit._id} tuit={tuit}/>
                        </div>

                    </div>

                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 mt-1">
                        <i onClick = {() => deleteTuitHandler(tuit._id)} className="fa fa-times"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TuitListItem;
