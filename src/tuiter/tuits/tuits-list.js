import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TuitListItem from "./tuits-list-item";
import {findTuitsThunk}
  from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(findTuitsThunk())
    }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
  <>
    <ul className="list-group mx-2">
         {
           loading &&
           <li className="list-group-item">
             Loading...
           </li>
         }
        {
            tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)
        }
    </ul>
    </>
  )
}

export default TuitList;

