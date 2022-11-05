import React from "react";
import {Routes, Route} from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import ProfileComponent from "./profile/profile-list";
import EditProfile from "./edit-profile/EditProfile";
import whoReducer
  from "./reducers/who-reducer";
import profileReducer from './reducers/profile-reducer'
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux"
import {Provider} from "react-redux";

const reducer = combineReducers({tuits: tuitsReducer, who: whoReducer, profile: profileReducer});
const store = createStore(reducer);

function Tuiter() {
 return (
 <Provider store={store}>
   <div className="row mt-2">
     <div className="col-2 col-md-2 col-lg-1 col-xl-2">
       <NavigationSidebar active="explore"/>
     </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6"
           style={{"position": "relative"}}>
       <Routes>
         <Route path="/home/"    element={<HomeComponent/>}/>
         <Route path="/explore/" element={<ExploreComponent/>}/>
         <Route path="/" element={<ExploreComponent/>}/>
         <Route path="/profile/" element={<ProfileComponent/>}/>
         <Route path="/edit-profile/" element={<EditProfile/>}/>
       </Routes>
      </div>
      <div className="d-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList/>
      </div>
   </div>
   </Provider>
 );
}

export default Tuiter