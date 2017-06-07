import React from 'react';
import Cell from "./Cell";

const GameBoard = (({value, onClick, nextPlayer, arr}) => {
    const rows = ['A', 'B', 'C']
    const columns = [1, 2, 3]


    return (<table>
        <tbody>
        {rows.map((rowKey, rowIndex) => {
            return (
                <tr key={rowKey + rowIndex}>
                    {columns.map((colKey, colIndex) => {
                        return (
                            <Cell key={colKey} reactKey={colKey} onClick={() => onClick(rowKey, colKey, nextPlayer)} value={arr[(rowIndex * 3) + colIndex]} nextPlayer={nextPlayer}/>
                        )
                    })}
                </tr>
            )
        })}
        </tbody>
    </table>)
})

export default GameBoard;
