import React, {useState} from "react";
import {useDispatch} from 'react-redux';

const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();
 const tuitClickHandler = () => {
   dispatch({type: 'create-tuit', tuit: whatsHappening});
 }
 return (
 <>
   <div className="row">
     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1">
       <img src="/images/nasa.png" alt="" className="img-fluid profile-pic"/>
     </div>
    <div className="fg-white col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 mt-1">
        <textarea className="p-2 fg-white" style={{background:"transparent", width:"100%", height:"50%",
        border:"solid rgba(211, 211, 211, 0.219) 1px"}} placeholder="What's happening?"
        value={whatsHappening} onChange={(event) => setWhatsHappening(event.target.value)}>
        </textarea>

        <div className="row mt-2 mb-2">
          <div className='col-10' style={{color:"#5bc0de"}}>
            <i className="fa fa-image m-2"></i>
            <i className="fa fa-chart-area m-2"></i>
            <i className="fa fa-smile m-2"></i>
            <i className="fa fa-calendar m-2"></i>
          </div>
          <div className="col-2 float-right pb-2">
            <button className="btn btn-primary btn-block rounded-pill" onClick={tuitClickHandler}> Tweet </button>
          </div>
        </div>
     </div>
   </div>
   </>
 );
}
export default WhatsHappening;