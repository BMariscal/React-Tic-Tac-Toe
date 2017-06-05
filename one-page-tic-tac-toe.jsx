import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nextPlayer: this.randomNumberBool(),
            value: null
        }
        this.initArr()
    }

    initArr() {
        if (!this.arr) {
            this.arr = [null,null, null,null,null, null, null,null, null];
            this.currentCell={};
            this.newArrAdd = [];
        }
        return this.currentCell, this.arr, this.newArrAdd
    }
    randomNumberBool(){
        return (Math.random() >= 0.5?'X':'O');
    }

    toggleNext() {
        this.setState({value: null})
        this.state.nextPlayer === 'X'? this.setState({nextPlayer: 'O'}) :
            this.setState({nextPlayer: 'X'})


    }
    handle(row, col, owner) {
        const cell = row+col;

        this.currentCell = {"A1": 0,
            "A2": 1,
            "A3": 2,
            "B1": 3,
            "B2": 4,
            "B3": 5,
            "C1": 6,
            "C2": 7,
            "C3": 8}

        if(!this.arr[this.currentCell[cell]]){
            this.arr.splice(this.currentCell[cell],1, owner)
            this.toggleNext()
        }


//         console.log(this.arr[this.currentCell[cell]], "look at this")
        const whoWins=checkWinner(this.arr)
        if (whoWins) {
            this.setState({value: `${owner} wins`})
            if (this.state.value){
                this.setState({value: null})
                this.arr = [null,null, null,null,null, null, null,null, null];

            }

        }



        let catsGame = this.arr.every(function(i){
            return i!== null
        })

        if(catsGame){
            this.setState({value: "Cat's Game."})
            this.arr = [null,null, null,null,null, null, null,null, null];

            //this.newGame()


        }

    }

    newGame() {
        this.setState({value: null})
        this.arr = [null,null, null,null,null, null, null,null, null];

    }


    render(){
        return (
            <div>
                <GameBoard toggleNext={this.toggleNext.bind(this)}  nextPlayer={this.state.nextPlayer} onClick={this.handle.bind(this)} arr={this.arr} />
                <ScoreDisplay winner={this.state.value} newGame={this.newGame.bind(this)}/>
            </div>)
    }
}


const checkWinner = (arr)=>{

    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];




    for (let i = 0; i < winner.length; i++) {
        const [a, b, c] = winner[i];

        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            return arr[a];
        }
    }return null

}


const GameBoard = (({value, onClick, nextPlayer, arr}) => {
    const rows = ['A', 'B', 'C']
    const columns = [1, 2, 3]

    return (<table>
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
    </table>)
})



class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};

    }


    render() {
        return (
            <td  onClick={() => {
                this.props.key
                this.props.onClick()}} >{this.props.value}</td>
        )
    }

}



const ScoreDisplay = (props)=>{

    return(

        <div id="scoreBox">
            <h4>TIC-TAC-TOE</h4>
            <button type="button" onClick={() => props.newGame()}className= "newGame">New Game</button>
            <h3>{props.winner}</h3>


        </div>)
};




ReactDOM.render(<Game/>, document.getElementById('app'));
