import FavoritesContext from "../components/store/favorite-context"
import { useContext} from "react"
import MeetupList from "../components/meetups/MeetupList"

export default function Favorites(props){
    const favotiteContext = useContext(FavoritesContext)
    console.log('-----favorite items here-----')
    console.log(favotiteContext.favorites)
    let content;
    if( favotiteContext.favorites.length === 0 ){
        content = <p>You have no favoties yet, start adding from 'All Meetups'</p>
    }else{
        content = <MeetupList meetups={favotiteContext.favorites}/>
    }
    return( 
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )

}