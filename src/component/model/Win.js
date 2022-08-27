import React, { useContext } from 'react'
import { GameContext } from '../../modelContext/GameContext'
import Oicon from '../icons/o-icon'
import Xicon from '../icons/xIcon'

const Win = () => {
  const {winner , Quit , nextRound } = useContext(GameContext)
  return (
    <div className='score'>
      <p className='score-status'>{}</p>
      <h3 className='score-title'>{winner === 'x' ? <Xicon/> : <Oicon/>} takes the round</h3>
        <div className='score-btn'>
            <button className='btn' onClick={Quit}>Quit</button>
            <button className='btn bg-yellow shadow-yellow' onClick={nextRound}> next round</button>
        </div>
    </div>
  )
}

export default Win