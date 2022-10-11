import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom'

export default function NewMeetup(props){

    const history = useHistory();

    function addMeetupDataHandler(meetupData){
        console.log(JSON.stringify(meetupData))
        fetch('https://techmeetup-ed981-default-rtdb.firebaseio.com/meetups.json?',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history.replace('/')
        });        
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetupData={addMeetupDataHandler}/>
        </section>
    );
}