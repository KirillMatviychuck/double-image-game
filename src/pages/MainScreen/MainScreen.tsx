import { FC } from "react";
import Board from "../../components/Board/Board";
import { GameBoardType } from "../../App";

const MainScreen: FC<Props> = ({ gameBoard, onImageClickHandler }) => {
    return (
        <div className='h-screen w-full bg-slate-800 flex flex-col flex-wrap justify-center items-center'>
            <Board gameBoard={gameBoard} onImageClickHandler={onImageClickHandler} />
        </div>
    )
}

type Props = {
    gameBoard: GameBoardType[]
    onImageClickHandler: (id: number) => void
}

export default MainScreen;