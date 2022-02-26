import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, useHistory } from 'react-router-dom';

function Comments() {

	const history = useHistory();
	const dispatch = useDispatch();
	const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
		event.preventDefault();

        dispatch({
			type: 'SET_COMMENTS',
			payload: {
			    comments: comments,
			},
		});
		history.push('/Review');
	};

    return (

        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget aboud it!</h4>
            </header>

            <h2>Any Comments you want to leave?</h2>
            <h5>Comments?</h5>
            <input
            label='Comments'
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            ></input>
            <button onClick={handleSubmit}>Next</button>
        </>
    )
}



export default Comments;