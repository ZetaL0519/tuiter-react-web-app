import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
 const {pathname} = useLocation();
 const paths = pathname.split('/');
 const active = paths[2];

 return (
   <div className="list-group">
       <Link to="/" className="list-group-item">
         Labs
       </Link>
     <a href="/" className="list-group-item">
        <div className="row">
            <div className="col-1">
                <i className="fab fa-twitter"></i>
            </div>
            <span className="col-xxl-10 col-xl-10 d-xl-block d-none">
                Twitter
            </span>
        </div>
     </a>
     <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
        <div className="row">
            <div className="col-1">
                <i className="fa fa-home"></i>
            </div>
            <span className="col-xxl-10 col-xl-10 d-xl-block d-none">
                Home
            </span>
        </div>
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
        <div className="row">
            <div className="col-1">
                <i className="fa fa-hashtag"></i>
            </div>
            <span className="col-xxl-10 col-xl-10 d-xl-block d-none">
                Explore
            </span>
        </div>
     </Link>
     <Link to="/tuiter" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
        <div className="row">
            <div className="col-1">
                <i className="fa fa-bell"></i>
            </div>
            <span className="col-xxl-10 col-xl-10 d-xl-block d-none">
                Notifications
            </span>
        </div>
     </Link>
     <Link to="/tuiter" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
        <div className="row">
            <div className="col-1">
                <i className="fa fa-envelope"></i>
            </div>
            <span className="col-xxl-10 col-xl-10 d-xl-block d-none">
                Messages
            </span>
        </div>
     </Link>
     <Link to="/tuiter" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
        <div className="row">
            <div className="col-1">
                <i className="fa fa-bookmark"></i>
            </div>
            <span className="col-xxl-10 col-xl-10 d-xl-block d-none">
                Bookmarks
            </span>
        </div>
     </Link>
     <Link to="/tuiter" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
        <div className="row">
            <div className="col-1">
                <i className="fa fa-list"></i>
            </div>
            <span className="col-xxl-10 col-xl-10 d-xl-block d-none">
              Lists            </span>
        </div>
     </Link>
     <Link to="/tuiter" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
        <div className="row">
            <div className="col-1">
                <i className="fa fa-user"></i>
            </div>
            <span className="col-xxl-10 col-xl-10 d-xl-block d-none">
              Profile            </span>
        </div>
     </Link>
     <Link to="/tuiter" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
        <div className="row">
            <div className="col-1">
                <i className="fa fa-ellipsis-h"></i>
            </div>
            <span className="col-xxl-10 col-xl-10 d-xl-block d-none">
              More
            </span>
        </div>
     </Link>
   </div>
 );
};

export default NavigationSidebar;