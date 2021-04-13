import React from 'react';

function ClearAll(props) {
    return (
        <div id='clear-all-btn'>
            <button onClick={props.onMessage}>CLEAR ALL</button>
        </div>
    );
}

export default ClearAll;