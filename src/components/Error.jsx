import React from 'react';

const emptyBox= {
    backgroundColor:'rgba(100,20,40,0.4)',
    border:'1px solid red',
    color:'red',
    borderRadius:'5px',
    padding:'5px',
    position: 'absolute',
    left:0,
    width: '480px',
    margin: '30px auto 20px auto',
    textAlign:'center'
}

function Error() {
    return (
        <div id='error' style={emptyBox}>
           <p> You can not add an empty note</p>
        </div>
    );
}

export default Error;