import { FC } from "react";
import { GameBoardType } from "../../App";

const Board: FC<Props> = ({ gameBoard, onImageClickHandler, isClicked }) => {

    return (
        <div className='h-[630px] w-[630px] flex flex-wrap justify-center items-center gap-2 box-border relative'>
            {gameBoard.map(cell => <div key={cell.cellID}
                onClick={cell.guessed ? () => { } : () => onImageClickHandler(cell.cellID)}
                className={`h-[150px] w-[150px] relative card ${isClicked ? 'pointer-events-none' : 'pointer-events: auto'}`}
            >
                {
                    cell.wasClicked
                        ? <div className='absolute top-0 h-full w-full'>
                            <img className='h-full w-full object-cover' src={cell.mainImg} alt={cell.mainImg} />
                        </div>
                        : <div className='absolute top-0 h-full w-full'>
                            <img className='h-full w-full object-cover' src={cell.backsideImg} alt={cell.backsideImg} />
                        </div>
                }
            </div>)}
        </div>
    )
}

type Props = {
    gameBoard: GameBoardType[]
    onImageClickHandler: (id: number) => void
    activeCard: boolean
    isClicked: boolean
}

export default Board;