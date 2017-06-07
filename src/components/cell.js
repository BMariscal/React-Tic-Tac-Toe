import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

    }


    render() {
        return (
            <td onClick={() => {
                this.props.key
                this.props.onClick()
            }}>{this.props.value}</td>
        )
    }

}

export default Cell;

