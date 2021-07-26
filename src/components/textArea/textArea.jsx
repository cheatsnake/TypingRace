import React from 'react';
import './textArea.scss';

const TextArea = ({words}) => {
    let key = 0;
    const content = words.map(word => {
        return (
            <h2 key={key++}>{word}</h2>
        )
    });
    return (
        <div className="textArea">
            {content}
        </div>
    );
};

export default TextArea;