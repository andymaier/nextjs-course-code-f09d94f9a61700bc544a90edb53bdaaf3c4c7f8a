import { useNavigate } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();


    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-605b9-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(() => {
            navigate('/', { replace: true })
        });
    }

    return <section>
        <h1>Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>        
    </section>
    
    
}

export default NewMeetupPage;