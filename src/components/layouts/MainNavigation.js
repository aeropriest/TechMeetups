import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../store/favorite-context';

export default function MainNaviation(props){
    const favoriteContext = useContext(FavoritesContext)
    console.log(favoriteContext.favorites.length)
    return (
    <header className={classes.header}>
        <div className={classes.logo}>React MeetUps</div>
        <nav>
            <ul className={classes.header.ul}>
                <li><Link to="/">All Meetups</Link></li>
                <li><Link to="/new-meetup">Add New Meetup</Link></li>
                <li>
                    <Link to="/favorites">
                        My Favorires
                        <span className={classes.badge} >{favoriteContext.favorites.length}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>)
}