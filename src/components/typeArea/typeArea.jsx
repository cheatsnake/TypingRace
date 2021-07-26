import React, {useState} from 'react';
import './typeArea.scss';

const TypeArea = (props) => {

    const [styles, setStyles] = useState('');
    const {words, onType, onChar} = props;

    function update(e) {
        const current = e.target.value;
        const word = words[words.length - 1].slice(0, e.target.value.length);

        if (e.target.value === words[words.length - 1] + ' ') {
            e.target.value = '';
            onChar();
            onType();
        } else if (current !== word) {
            setStyles('red');
        } else {
            setStyles('');
            onChar();
        }
    }

    return (
        <>
            <div className="typeArea">
                <input 
                autoFocus
                className={styles}
                type="text" 
                maxLength="16"
                onChange={update}/>
            </div>
            <div className="label">
                <a href="https://cheatsnake.github.io/">Made by <span>Yury</span></a>
            </div>
        </>
    )};

export default TypeArea;