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
        if (understanding === '') {
            alert('plz set a value');
            return
        } else
        dispatch({
			type: 'SET_UNDERSTANDING',
			payload: {
			    understanding: understanding,
			},
		});
        setUnderstanding('');
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
            type='range'min='1' max='5'
            label='Understanding'
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}
            ></input>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
}



export default Understanding;