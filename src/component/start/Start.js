import React, { useContext } from 'react'
import Xicon from "../icons/xIcon";
import Oicon from "../icons/o-icon";
import { GameContext } from '../../modelContext/GameContext';
const Start = () => {
  const {choose,setChoose,changePlayType} =useContext(GameContext);
  return (
   <div className="start">
    <div className="start-header">
      <Xicon/>
      <Oicon/>
    </div>
    <div className="card shadow1">
      <h1 className="text-lg">pick ur first mark</h1>
      <div className="start-players"> 
       <span className={choose ==='x' ? "start-players--active" : " "} onClick={()=>setChoose("x")}>
        <Xicon color={choose === 'x' ? "dark" : "light"}/>
       </span>
       <span className={choose ==='o' ? "start-players--active" : " "} onClick={()=>setChoose("o")}>
        <Oicon color={choose === 'o' ? "dark" : "light"} /></span>
      </div>
       <p className='text-light'>alert "x go first"</p>
    </div>

      <div className="start-btn">
        <button className='btn btn-cpu' onClick={() => changePlayType('cpu')}>new game (vs Cpu 'ez-level')</button>
        <button className='btn btn-friend' onClick={() => changePlayType('user')}>new game (vs Friend)</button>
      </div>
      </div>
  ); 
};  
export default Start;

