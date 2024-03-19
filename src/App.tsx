import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import MainScreen from './pages/MainScreen/MainScreen'
import cat from './assets/cat.jpg';
import cheetah from './assets/cheetah.jpg';
import cow from './assets/cow.jpg';
import dog from './assets/dog.jpg';
import fox from './assets/fox.jpg';
import parrot from './assets/parrot.jpg';
import rhino from './assets/rhino.jpg';
import turtle from './assets/turtle.jpg';
import questionMark from './assets/question_mark.jpg'
import { useState } from 'react';

function App() {
  const [gameBoard, setGameBoard] = useState<GameBoardType[]>([])
  const [checkImagesState, setCheckImagesState] = useState<GameBoardType[]>([])
  const gameImages = [cat, cheetah, cow, dog, fox, parrot, rhino, turtle, cat, cheetah, cow, dog, fox, parrot, rhino, turtle]
  const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

  const onImageClickHandler = (id: number) => {
    gameBoard[id].wasClicked = !gameBoard[id].wasClicked
    setGameBoard([...gameBoard])
    checkImagesState.push(gameBoard[id])
  }

  if (checkImagesState.length === 2) {
    if (checkImagesState[0].mainImg === checkImagesState[1].mainImg) {
      gameBoard[checkImagesState[0].cellID].guessed = true
      gameBoard[checkImagesState[1].cellID].guessed = true
      setCheckImagesState([])

    } else {
      setTimeout(() => {
        gameBoard[checkImagesState[0].cellID].wasClicked = false
        gameBoard[checkImagesState[1].cellID].wasClicked = false
        setCheckImagesState([])
      }, 500)
    }
  }



  if (!gameBoard.length) {
    for (let i = 0; i < 16; i++) {
      const currentElement = {
        cellID: i,
        backsideImg: questionMark,
        mainImg: gameImages[i],
        wasClicked: false,
        guessed: false
      }
      gameBoard.push(currentElement)
    }
  }
  console.log(gameBoard)

  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Navigate to='/game-board' />} />
        <Route path='/game-board' element={<MainScreen gameBoard={gameBoard} onImageClickHandler={onImageClickHandler} />} />
      </Routes>
    </div>
  )
}

export type GameBoardType = {
  cellID: number
  backsideImg: string
  mainImg: string
  wasClicked: boolean
  guessed: boolean
}

export default App
