import axios from 'axios';
import { useState } from 'react';

// import { useSelector } from 'react-redux';


function Comments() {
    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget aboud it!</h4>
            </header>

            <h2>Any Comments you want to leave?</h2>
            <h5>Comments?</h5>
            <input></input>
            <button>Next</button>
        </>
    )
}



export default Comments;