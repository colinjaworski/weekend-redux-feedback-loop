import axios from 'axios';
import { useState, useEffect } from 'react';



function Admin() {
    console.log('in admin function')
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        getFeedback();
    }, [])

    function getFeedback() {


        axios
            .get('/feedback')
            .then((response) => {
                console.log('in .get.then', response.data)
                setFeedback(response.data)
            })
            .catch((err) => {
                console.log('in handleCheckoutClick.catch', err);
            });

    }
console.log('the feedback', feedback);

    return (
        <>
            <h2>Feedback Results</h2>
            <ul>
                {/* {feedback.map((feedback, i) => (
                    <li key={i}>{feedback.feeling}
                    {feedback.understanding}
                    {feedback.support}
                    {feedback.comments}
                    </li>
                ))} */}
            </ul>
        </>
    )

}
export default Admin;