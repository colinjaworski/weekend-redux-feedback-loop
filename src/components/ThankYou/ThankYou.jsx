
import { useHistory } from 'react-router-dom';

function ThankYou() {
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/');

    }
    return (
        <>
            <div className="thanksCard">
                <header className='App-header'>
                    <h1 className='App-title'>Thanks for the feedback!</h1>

                </header>
                <button className="thanksButton"
                    onClick={handleSubmit}>Leave New Feedback!</button>
            </div>
        </>
    )
}
export default ThankYou;