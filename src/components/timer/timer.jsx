import React, {Component} from 'react';
import './timer.scss';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: this.props.time,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setClock(),
        1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    setClock() {
        let current = this.state.timer;
        this.setState({
            timer: current - 1,
        });
    }

    render() {

        const {timer} = this.state;
        if (timer === 0) {
            clearInterval(this.timerID);
            this.props.onTime();
            return null;
        }

        return (
            <div className="timer">
                <p>{timer}</p>
            </div>
        );
    }
};

export default Timer;