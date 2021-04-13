import React from 'react';

function ConfirmBox() {
    return (
        <section id='comfirm-box'>
            <div>
                <h1>Do you want to delete all notes</h1>
                <p>This action can not be retrieved</p>
                <div>
                    <button onClick={deleteAll}>YES</button>
                    <button onClick={removeBox}>CANCEL</button>
                </div>
            </div>
        </section>
    );
}

export default ConfirmBox;