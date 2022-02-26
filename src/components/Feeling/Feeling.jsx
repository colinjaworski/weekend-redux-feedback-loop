import axios from 'axios';
import { useState } from 'react';

// import { useSelector } from 'react-redux';


function Feeling() {
    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget aboud it!</h4>
            </header>

            <h2>How are you feeling today?</h2>
            <h5>Feeling?</h5>
            <input></input>
            <button>Next</button>
        </>
    )
}



export default Feeling;