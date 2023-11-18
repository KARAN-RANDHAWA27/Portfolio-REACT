import React, { useState } from 'react'
import Square from './Square'
import './game.css'

const Board = () => {

    const [state, setState] = useState(Array(9).fill(null));

    const [isXTurn, setIsXTurn] = useState(true)

    const handclick = (index) => {
        const copyState = { ...state }
        copyState[index] = isXTurn ? "X" : "O"
        setState(copyState)
        setIsXTurn(!isXTurn);
    }

    const checkWinner = () => {
        const winnner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],

        ]
        for (let value of winnner) {
            const [a, b, c] = value;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]
            }
        }
    }

    const reset = () => {
        setState(Array(9).fill(null))
        setIsXTurn(true)
    }

    const isWinner = checkWinner();

    return (
        <div className="board-container">

            {isWinner ? <>{isWinner} won</> :
                <>
                    <div className="board-row">
                        <Square
                            value={state[0]}
                            onClick={() => handclick(0)}
                        />

                        <Square
                            value={state[1]}
                            onClick={() => handclick(1)}
                        />

                        <Square
                            value={state[2]}
                            onClick={() => handclick(2)}
                        />
                    </div>
                    <div className="board-row">
                        <Square
                            value={state[3]}
                            onClick={() => handclick(3)}
                        />
                        <Square
                            value={state[4]}
                            onClick={() => handclick(4)}
                        />
                        <Square
                            value={state[5]}
                            onClick={() => handclick(5)}
                        />
                    </div>
                    <div className="board-row">
                        <Square
                            value={state[6]}
                            onClick={() => handclick(6)}
                        />
                        <Square value={state[7]}
                            onClick={() => handclick(7)}
                        />
                        <Square value={state[8]}
                            onClick={() => handclick(8)}
                        />
                    </div>

                </>}
            <button className=" button reset" onClick={reset}>
                Reset
            </button>
        </div>
    )
}

export default Board