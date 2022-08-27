import React, { useContext } from 'react'
import Xicon from '../icons/xIcon'
import Oicon from '../icons/o-icon'
import { GameContext } from '../../modelContext/GameContext';
const BoardCard = ({user="nouser" , active, index }) => {
  const {whenClick} = useContext(GameContext)
  return (
    <div 
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
      } ${!active ? "shadow-gray" : "active"}`}
     onClick= {()=>whenClick(index)}
    >
           {user==='x' && <Xicon color={active && "dark"} size ="lg" />}
           {user==='o' && <Oicon color={active && "dark"} size ="lg" />}
    </div>
  );
    };

export default BoardCard;