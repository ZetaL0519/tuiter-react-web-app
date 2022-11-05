import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
  const profile = useSelector(state => state.profile);
  let [firstName, setFirstName] = useState(profile.firstName);
  let [lastName, setLastName] = useState(profile.lastName);
  let [bio, setBio] = useState(profile.bio);
  let [location, setLocation] = useState(profile.location);
  let [website, setWebsite] = useState(profile.website);
  let [dateOfBirth, setDateOfBirth] = useState(new Date(profile.dateOfBirth).toLocaleDateString("en-CA"));
  const dispatch = useDispatch();
  const saveClickHandler = (profile) => {
    dispatch({
        type:'update-profile',
        profile: {
            firstName,
            lastName,
            bio,
            location,
            website,
            dateOfBirth
        }
        })
  }
 return(
      <div>
        <div className="row mt-2 px-3 mb-2">
          <div className="col-1">
            <Link to="/tuiter/profile" className="ms-3 fg-white"><i className="fa fa-times"/></Link>
          </div>

           <div className="col-9 ">
                <h5 className="fw-bold ms-4">Edit Profile</h5>
           </div>
           <div className="col-2">
                <Link to="/tuiter/profile" className="btn btn-dark  rounded-pill" onClick={saveClickHandler}>Save</Link>
           </div>
        </div>

        <div className="position-relative mb-4">
            <div className="mb-5 position-relative">
                <div>
                    <img className="wd-banner-background" alt="" src={profile.bannerImg}/>
                </div>
                <div className="d-flex justify-content-between px-3">
                    <div>
                        <img className="wd-profile-img" alt="" src={profile.profileImg}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="bioSection p-2">
          <div className="form-floating">
            <input id="first-name" value={firstName} placeholder={profile.firstName}
                  className="form-control border-1 "
                  onChange={(event) => setFirstName(event.target.value)}/>
            <label htmlFor="first-name">First Name</label>
          </div>
          <div className="form-floating mt-3">
            <input id="last-name" value={lastName} placeholder="Last Name"
                  className="form-control border-1 "
                  onChange={(event) => setLastName(event.target.value)}/>
            <label htmlFor="last-name">Last Name</label>
          </div>
          <div className="form-floating mt-3">
          <textarea id="bio" value={bio} placeholder="Bio"
                    className="form-control border-1 "
                    onChange={(event) => setBio(event.target.value)}/>
            <label htmlFor="bio">Bio</label>
          </div>
          <div className="form-floating mt-3">
            <input id="location" value={location} placeholder="Location"
                  className="form-control border-1"
                  onChange={(event) => setLocation(event.target.value)}/>
            <label htmlFor="location">Location</label>
          </div>
          <div className="form-floating mt-3">
            <input id="website" value={website} placeholder="Website"
                  className="form-control border-1"
                  onChange={(event) => setWebsite(event.target.value)}/>
            <label htmlFor="website">Website</label>
          </div>
          <div className="form-floating mt-3">
            <input id="date-of-birth" value={dateOfBirth} placeholder="Date of Birth"
                  className="form-control border-1" type="date"
                  onChange={(event) => setDateOfBirth(event.target.value)}/>
            <label htmlFor="date-of-birth">Date of Birth</label>
          </div>

        </div>

      </div>
  );
};

export default EditProfile;