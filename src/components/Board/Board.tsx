import { FC } from "react";
import { GameBoardType } from "../../App";

const Board: FC<Props> = ({ gameBoard, onImageClickHandler }) => {
    return (
        <div className='h-[630px] w-[630px] flex flex-wrap justify-center items-center gap-2 box-border relative'>
            {gameBoard.map(cell => <div key={cell.cellID}
                onClick={cell.guessed ? () => { } : () => onImageClickHandler(cell.cellID)}
                className='h-[150px] w-[150px]'
            >
                {
                    cell.wasClicked
                        ? <img className='h-full w-full object-cover' src={cell.mainImg} alt={cell.mainImg} />
                        : <img className='h-full w-full object-cover' src={cell.backsideImg} alt={cell.backsideImg} />
                }
            </div>)}
        </div>
    )
}

type Props = {
    gameBoard: GameBoardType[]
    onImageClickHandler: (id: number) => void
}

export default Board;