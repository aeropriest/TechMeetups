import MainNaviation from './MainNavigation'
import classes from './Layout.module.css';

export default function Layout(props){
    return(
        <div>
            <MainNaviation/>
            <main className={classes.main}>
                {props.children}
            </main>            
        </div>
    );
}