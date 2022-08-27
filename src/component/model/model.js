import React, { useContext } from 'react'
import { ModelContext } from '../../modelContext/ModelContext'
import { GameContext } from '../../modelContext/GameContext'
import Restart from './Restart'
import Win from './Win'
const Model = () => {
  const { Quit , nextRound } = useContext(GameContext)
    const {show , ModelMode} = useContext(ModelContext)
  return (
<>
{show && (
    <div className='model'>
        <div className='main-model'>
            <div className='container'>
              {ModelMode === "winner" && <Win />}
              {ModelMode === "noWin" && <><h3 className='score-title'>NoWin</h3>
              <div className='score-btn'>
              <button className='btn' onClick={Quit}>Quit</button>
            <button className='btn bg-yellow shadow-yellow' onClick={nextRound}> next round</button>
            </div>
              </> }
            </div>
        </div>
    </div>
)}
    </>
  )
}

export default Model;