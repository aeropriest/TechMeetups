import classes from './MeetupItem.module.css'
export default function MeetupItem(props){
    return<li class={classes.item}>
        <div>
            <img class={classes.image} src={props.image} alt={props.title}/>
        </div>
        <div class={classes.content}>
             <h3 class={classes.title}>{props.title}</h3>
             <address>{props.address}</address>
             <p>{props.description}</p>
        </div>
        <div class={classes.actions}>
            <button>Add to Favorites</button>
        </div>
    </li>
}