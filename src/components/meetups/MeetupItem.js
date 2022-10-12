import classes from './MeetupItem.module.css'
import Card from './ui/Card'
import { useContext } from 'react'
import FavoritesContext from '../store/favorite-context'

export default function MeetupItem(props){
    const favotiteContext = useContext(FavoritesContext)
    const isFavorite = favotiteContext.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler(){
        if( isFavorite ){
            favotiteContext.removeFavorite(props.id)
        }else{
            favotiteContext.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            })
        }
    }
    return<li className={classes.item}>
        <Card>
            <div>
                <img className={classes.image} src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3 className={classes.title}>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{isFavorite ? 'Remove from Favoites' : 'Add to Favorites'}</button>
            </div>
        </Card>
    </li>
}