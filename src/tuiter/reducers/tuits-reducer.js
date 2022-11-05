//import tuits from "../data/tuits.json"
//
//const tuitsReducer = (state = tuits, action) => {
//    switch(action.type) {
//        case 'create-tuit':
//            const newTuit = {
//                tuit: action.tuit,
//                _id: (new Date()).getTime() + '',
//                username: "ReactJS",
//                handle: "ReactJS",
//                retuits:111,
//                likes: 222,
//                comments: 333,
//                profileImg: "./images/reactLogo.png"
//            }
//            return [
//                newTuit,
//                ...state,
//            ];
//
//            case 'delete-tuit':
//                return state.tuiter(
//                    tuit => tuit.id !== action.tuit._id
//                );
//            case 'like-tuit':
//                return state.map(tuit =>{
//                    if (tuit._id === action.tuit._id) {
//                        if (tuit.liked === true) {
//                            tuit.liked = false;
//                            tuit.likes --;
//                        } else {
//                            tuit.liked = true;
//                            tuit.likes ++;
//                        }
//                        return tuit;
//                    } else {
//                        return tuit;
//                    }
//                });
//            default:
//                return tuits
//    }
//
//}
//export default tuitsReducer;

import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "../../../images/nasa.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    deleteTuit(state, action) {
      const index = state
         .findIndex(tuit =>
            tuit._id === action.payload._id);
      state.splice(index, 1);
    },

   createTuit(state, action) {
     state.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   },

   likeTuit(state, action) {
    const index = state.findIndex(tuit => tuit._id === action.payload._id)
    state[index].liked = true;
    state[index].likes += 1;
   },

   unlikeTuit(state, action) {
    const index = state.findIndex(tuit => tuit._id === action.payload._id)
    state[index].liked = false;
    state[index].likes -= 1;
   }
 }
});

export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;