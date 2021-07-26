import React, {useState, useEffect} from 'react';
import './showSpeed.scss';

const ShowSpeed = (props) => {

    const {onReset} = props;

    const [close, setClose] = useState(false);

    const closeWindow = () => setClose(true);

    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            closeWindow();
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    useEffect(() => {
        if (close) onReset()
    }, [close, onReset])

    if (close) {
        return null;
    }

    return (
        <div className="score">
            <div className="close" onClick={closeWindow}>&times;</div>
            <h2>Your speed</h2>
            <span>{props.speed} WPM</span>
        </div>
    );
};

export default ShowSpeed;