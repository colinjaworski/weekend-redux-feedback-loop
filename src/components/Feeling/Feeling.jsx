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

        dispatch({
			type: 'SET_FEELING',
			payload: {
			    feeling: feeling,
			},
		});
		history.push('/Understanding');
	}; 


    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget aboud it!</h4>
            </header>

            <h2>How are you feeling today?</h2>
            <h5>Feeling?</h5>
            <input
            label='Feeling'
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}
            ></input>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
}



export default Feeling;