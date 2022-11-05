import React from "react";
import {Link} from "react-router-dom";

const ProfileListItem = ({
     profile})  => {
     return (
        <>
        <div>
            <div className="header">
                <div className="row p-2">
                    <div className="col-1">
                        <Link to="/tuiter">
                            <i className="fa fa-arrow-left"></i>
                        </Link>
                    </div>

                    <div className="col-9">
                        <h5 className="mb-0 pb-0 fw-bolder">
                        {profile.firstName}
                        </h5>
                        <span >{profile.tuits} tuits</span>
                    </div>
                </div>
            </div>

            <div className="mb-5 position-relative">
            <img className="wd-banner-background" alt="" src={profile.bannerImg}/>

            <div>
                <img className="wd-profile-img" alt="" src={profile.profileImg}/>
            </div>

            <Link to="/tuiter/edit-profile"
                    className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                Edit profile
            </Link>

            </div>

            <div className="bioSection p-2">
                <h5 className="fw-bolder pb-0 mb-0">
                    {profile.firstName}<i className="fa fa-badge-check text-primary"></i>
                </h5>
                <h6 className="pt-0 fg-color-gray">@{profile.handle}</h6>
                <p className="fg-white pt-2">
                    {profile.bio}
                </p>
                <p>
                    <i className="fa fa-map-marker me-2"></i>
                    {profile.location}
                    <i className="fa fa-birthday-cake ms-3 me-2"></i>
                    {profile.dateOfBirth}
                    <i className="far fa-calendar ms-3 me-2"></i>
                    {profile.dateJoined}
                </p>
                <b className="fg-white">{profile.followingCnt}</b> Following
                <b className="ms-4 fg-white">{profile.followerCnt}</b> Followers

            </div>
        </div>
    </>
     );
}

export default ProfileListItem;