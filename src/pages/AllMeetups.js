import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetups(props){
    const [loading, setLoading] = useState(true);
    const [loadedMeetupData, setLoadedMeetupData] = useState([]);
    
    useEffect(()=>{
        setLoading(true);
        fetch('https://techmeetup-ed981-default-rtdb.firebaseio.com/meetups.json').then(response=>{
            console.log(response)
            return response.json();
        }).then(data=>{
            const meetups = [];
            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup)
            }
            setLoading(false)
            setLoadedMeetupData(meetups);
        })
    }, [])
    if( loading ){
        return (
            <section>
                <p>loading ...</p>
            </section>
        )
    }
        
    return (
        <section>
            <h1>All Meetups</h1>
                <MeetupList meetups={loadedMeetupData}/>
        </section>
    )
}