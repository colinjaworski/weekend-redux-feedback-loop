import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, useHistory } from 'react-router-dom';

function Review() {

    const history = useHistory();
    const dispatch = useDispatch();

    // const handleSubmit = (event) => {
    //     event.preventDefault();

        return (
            <>
                <h2>10/10 let's do it again!</h2>
                {/* <button onClick={handleSubmit}>Next</button> */}
            </>
        )
    // }
}

export default Review;
