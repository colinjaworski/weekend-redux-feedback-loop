import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, useHistory } from 'react-router-dom';

function Support() {

	const history = useHistory();
	const dispatch = useDispatch();
	const [support, setSupport] = useState('');

    const handleSubmit = (event) => {
		event.preventDefault();

        dispatch({
			type: 'SET_SUPPORT',
			payload: {
			    support: support,
			},
		});
		history.push('/Comments');
	};

    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget aboud it!</h4>
            </header>

            <h2>How well are you being supported?</h2>
            <h5>Support?</h5>
            <input
            label='Support'
            value={support}
            onChange={(event) => setSupport(event.target.value)}
            ></input>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
}



export default Support;