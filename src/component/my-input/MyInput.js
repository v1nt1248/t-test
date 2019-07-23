import React from 'react';
import './MyInput.css';

function MyInput(props) {
    return (
        <div className="MyInput">
            <input
                type="text"
                className="MyInput-input"
                placeholder={props.placeholder}
            />
            <div className="MyInput-error">
            </div>
        </div>
    );
}

export default MyInput;
