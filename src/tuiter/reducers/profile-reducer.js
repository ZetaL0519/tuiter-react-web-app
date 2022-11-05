import profile from "../data/profile.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case "update-profile":
            return {...state, ...action.profile};
        default:
            return state;
    }
};

export default profileReducer;


//export default profileReducer;

//import {createSlice} from "@reduxjs/toolkit";
//import profile from '../data/profile.json';
//
//const profileSlice = createSlice({
//    name: "profile",
//    initialState: profile,
//    reducers: {
//        updateProfile(state, action) {
//            state = action.payload
//        }
//    }
//});
//export const {updateProfile} = profileSlice.actions;
//export default profileSlice.reducer;