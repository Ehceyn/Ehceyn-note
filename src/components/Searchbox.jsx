import React from 'react';

function Searchbox(){
    return (
        <div id='searchdiv'>
            <input type='text' placeholder='search your notes' id='search' name='search'/>
            <button>Let's go!</button>
        </div>
    )
}

export default Searchbox