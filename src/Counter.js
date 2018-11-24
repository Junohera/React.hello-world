import React, { Component } from 'react';

class Counter extends Component {
    
    state = {
        number: 0
    }

    // 증가함수
    onClickIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // 감소함수
    onClickDecrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    };

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>value : {this.state.number}</div>
                <button onClick="{this.onClickIncrease}">+</button>
                <button onClick="{this.onClickDecrease}">-</button>
            </div>
        )
    }
}

export default Counter;