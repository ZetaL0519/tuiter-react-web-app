import React from 'react';
import {useSelector} from 'react-redux';
import TuitListItem from "./tuits-list-item";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
  return (
    <ul className="list-group mx-2">
        {
            tuits.map && tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)
        }
    </ul>
  )
}

export default TuitList;

