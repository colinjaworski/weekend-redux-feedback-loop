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
            <h1>Feedback Results!</h1>

            {feedback.map((item) => {
                const { feeling, understanding, support, comments, id } = item;
                return (
                    <div key={id}>
                        <div>{feeling}</div>
                        <div>{understanding}</div>
                        <div>{support}</div>
                        <div>{comments}</div>
                    </div>
                );
            })

            }

        </>
    )

}
export default Admin;