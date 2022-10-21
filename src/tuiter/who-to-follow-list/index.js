import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
  from "./who-to-follow-list-item";

const WhoToFollowList = () => {
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