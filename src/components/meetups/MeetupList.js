import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'
export default function MeetupList(props){
    return <ul class={classes.list}>
        {props.meetups.map(meetup=>{
            return <MeetupItem 
                key={meetup.id} 
                id={meetup.id} 
                image={meetup.image}
                title={meetup.title}
                description={meetup.description}
                />
        })}
    </ul>
}