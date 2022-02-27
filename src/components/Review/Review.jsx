import axios from 'axios';
import { useState } from 'react';
import { HashRouter as Router, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function Review() {
    const currentReview = useSelector((store) => store.formReducer);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    // ===== POST ======================================== //
    const handleReviewClick = () => {
        console.log('in handleReviewClick', currentReview);
        axios
            .post('/feedback', currentReview)
            .then((response) => {
                console.log('in handleReview.then', currentReview);
                
                dispatch({
                    type: 'DELETE_VALUES',                                    
                });

                history.push('/ThankYou');
            })
            .catch((err) => {
                console.log('in handleCheckoutClick.catch', err, currentReview);
            });
    };

    // ===== RETURN ======================================= //
    return (
        <>
            <h4>Review Your Feedback</h4>
            <ul>
                <li>Feelings:&nbsp;{currentReview.feeling}</li>
                <li>Understanding:&nbsp;{currentReview.understanding}</li>
                <li>Support:&nbsp;{currentReview.support}</li>
                <li>Comments:&nbsp;{currentReview.comments}</li>
            </ul>

            <button onClick={handleReviewClick}>Next</button>
        </>
    )

}

export default Review;
