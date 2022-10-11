import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css';
export default function MainNaviation(props){
    return (
    <header className={classes.header}>
        <div className={classes.logo}>React MeetUps</div>
        <nav>
            <ul className={classes.header.ul}>
                <li><Link to="/">All Meetups</Link></li>
                <li><Link to="/new-meetup">Add New Meetup</Link></li>
                <li><Link to="/favorites">My Favorires</Link></li>
            </ul>
        </nav>
    </header>)
}