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
            <h1>WHERE ARE THE FEEDBACK RESULTS!!!</h1>

            {feedback.map((item) => 
             (
                    <div key={item.id}>
                        <p>{item.feeling}</p>
                        <p>{item.understanding}</p>
                        <p>{item.support}</p>
                        <p>{item.comments}</p>
                    </div>
             )
            )

            }

        </>
    )

}
export default Admin;