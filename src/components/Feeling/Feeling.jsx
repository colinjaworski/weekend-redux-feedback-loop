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

        if (feeling === '') {
            alert('plz set a value');
            return
        } else
            dispatch({
                type: 'SET_FEELING',
                payload: {
                    feeling: feeling,
                }
            });
        setFeeling('');
        history.push('/Understanding');
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
            className = "slider"
                type='range' min='1' max='5'
                label='Feeling'
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
            ></input>
            {/* <span>5</span> */}
            &nbsp;
            <button className ="button"
           
            onClick={handleSubmit}>Next</button>
        </div>
    )
}



export default Feeling;