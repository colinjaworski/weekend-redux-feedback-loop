import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, useHistory } from 'react-router-dom';

function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (feeling === '') { // input validation!!!
            alert('plz set a value');
            return
        } else
            dispatch({
                type: 'SET_FEELING',
                payload: {
                    feeling: feeling,
                }
            });
        setFeeling(''); // tried to set feeling to empty after dispatch but didn't work. We do this on another page. 
        history.push('/Understanding'); // once handleSubmit is run, we move on to the next page at /Understanding
    };


    return (
        <div className="card">
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget aboud it!</h4>
            </header>

            <h2>How are you feeling today?</h2>
            <h5>Feeling?</h5>
           {/* <span>1</span> */}
            <input
            className = "slider" // slider is an input type and we've set the range max and min here
                type='range' min='1' max='5'
                label='Feeling'
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)} // setting value  of feeling to the targeted input value
            ></input>
            {/* <span>5</span> */}
            &nbsp;
            <button className ="button" // <=== this is a button
           
            onClick={handleSubmit}>Next</button>
        </div>
    )
}



export default Feeling;