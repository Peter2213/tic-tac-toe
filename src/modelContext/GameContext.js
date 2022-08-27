import { createContext, useEffect, useState, useContext } from "react"; 
import calcBestMove, { Calc } from "./calc";
import { ModelContext } from "./ModelContext";

const GameContext =  createContext();
const GameState = (props) => {
    const {showModel , setModelMode , hideModel } = useContext(ModelContext)
    const [screen , setScreen] = useState('start')
    const [choose , setChoose] = useState('x') // using between x or o
    const [playType , setPlayType] = useState("user") //using between user or computer
    const [squares , setSquares] = useState(new Array(9).fill('')) 
    const [xnext , setXnext] = useState(false);
    const [winner, setWinner] = useState(null)
    const [winnerLine, setWinnerLine] = useState(null)
    const [ties , setTies]= useState ({x:0  , o:0})
    const changePlayType = mode => {
        setPlayType(mode);
        setScreen("game");
    }
    useEffect(() => {
      //check if cpu turn
      let currentUser = xnext ? "o" : "x";
      if (playType === "cpu" && currentUser !== choose && !winner) {
        cpuNextMove(squares);
      }
      checkNoWinner();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [xnext, winner, screen]);
    const whenClick = (ix) => {
      if(squares[ix] || winner){
        return;
      }
      
        const currentUser = xnext ? "o" : "x";
        if(playType === "cpu" && currentUser !== choose){
          return
        }
        let boxes =  [...squares]
        boxes[ix] = !xnext ? 'x' : 'o'  
      setSquares(boxes) 
      setXnext(!xnext)
    /* ----------------------bool--------------------- */
      bool(boxes)
    } 
  
    const bool = (boxes) => {
        const yes = Calc(boxes);
        if(yes){
            setWinner(yes.winner)
            setWinnerLine(yes.line)
            showModel()
            setModelMode("winner")
            const ofTi = {...ties}
            ofTi[yes.winner] += 1 ;
            setTies(ofTi)
        }
         else{
           setModelMode("");
         }
    }
    const cpuNextMove = (sqrs) => {
      let bestmove = calcBestMove(sqrs, choose === "x" ? "o" : "x");
      let boxes = [...squares];
      boxes[bestmove] = !xnext ? "x" : "o";
      setSquares(boxes);
      setXnext(!xnext);
      bool(boxes);
    };
   const Quit = () =>{  
    setSquares(new Array(9).fill(""));
    setXnext(false);
    setWinner(null);
    setWinnerLine(null);
    setChoose("x");
    setTies({ x: 0, o: 0 });
    hideModel();
    setScreen("start");
  }
  const nextRound = () =>{
   setSquares(new Array(9).fill(""))
    setXnext(winner === 'x');
    setWinner(null);
    setWinnerLine(null);
    hideModel() 
  }
    const checkNoWinner = () => {
      const moves = squares.filter((sq) => sq === "");
      if (moves.length+1 === 0) {
        showModel();
       setModelMode("noWin");
     }
   };
  const restart = () =>{
    setSquares(new Array(9).fill(""));
    setXnext(winner === "x");
    setWinner(null);
    setWinnerLine(null);
    hideModel();
  }
    return( 
        <GameContext.Provider value={{
            screen,
            choose,
            squares,
            xnext, 
            ties,
            winner,
            winnerLine,
            Quit,
            setScreen,
            nextRound,
            setChoose,
            whenClick,
            changePlayType,
            restart,
            
        }}>{props.children}</GameContext.Provider>
    )
}         
export {GameContext, GameState};                                          