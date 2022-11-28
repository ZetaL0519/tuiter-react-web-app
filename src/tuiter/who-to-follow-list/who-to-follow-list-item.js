import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-xxl-3 col-xl-3 col-lg-4 d-md-none d-lg-block mt-1 text-center">
       <img className=" rounded-circle wd-profile-pic" alt="" src={`/images/${who.avatarIcon}`}/>
     </div>
     <div className="col-xxl-6 col-xl-6 col-lg-4 mt-1">
       <div className="fw-bold">{who.userName} <i className="fa fa-check-circle"></i></div>
       <div className="wd-light-gray">@{who.handle}</div>
     </div>
     <div className="col-xxl-3 col-xl-3 col-lg-3 pull-right">
       <button className="btn btn-primary rounded-pill float-end mt-2 wd-follow">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;

