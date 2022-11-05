import React from "react";
import WhoToFollowListItem
  from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector(
                    (state) => state.who);
 return(
   <ul className="list-group">
     <li className="list-group-item wd-who-to-follow fw-bold">
       Who to follow
     </li>
     {
       whoArray.map(who =>
         <WhoToFollowListItem
           key={who._id}
           who={who}/>
       )
     }
   </ul>
 );
};

export default WhoToFollowList;