
import { useHistory } from 'react-router-dom';

function ThankYou() {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/');

    }
    return (
        <>
            <h2>Thanks for the feedback</h2>
            <button onClick={handleSubmit}>Leave New Feedback!</button>
        </>
    )
}
export default ThankYou;