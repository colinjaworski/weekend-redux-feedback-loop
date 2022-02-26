import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, useHistory } from 'react-router-dom';

function Understanding() {
    
    const history = useHistory();
	const dispatch = useDispatch();
	const [understanding, setUnderstanding] = useState('');

    const handleSubmit = (event) => {
		event.preventDefault();

        dispatch({
			type: 'SET_UNDERSTANDING',
			payload: {
			    understanding: understanding,
			},
		});
		history.push('/Support');
	}; 
    
    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget aboud it!</h4>
            </header>

            <h2>How well are you understanding the content?</h2>
            <h5>Understanding?</h5>
            <input
            label='Understanding'
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}
            ></input>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
}



export default Understanding;