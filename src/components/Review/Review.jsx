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
        <div className = "reviewCard">
        <header className='App-header'>
                <h1 className='App-title'>Thanks!</h1>
                <h4>Review your feedback</h4>
            </header>
            <div className ="reviewTable">
                <p>Feelings:&nbsp;{currentReview.feeling}</p>
                <p>Understanding:&nbsp;{currentReview.understanding}</p>
                <p>Support:&nbsp;{currentReview.support}</p>
                <p>Comments:&nbsp;{currentReview.comments}</p>
            </div>

            <button 
            className ="reviewButton"
            onClick={handleReviewClick}>Submit</button>
            </div>

        </>
    )

}

export default Review;
