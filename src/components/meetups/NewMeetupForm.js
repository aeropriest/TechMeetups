import {useRef} from 'react'
import classes from './NewMeetupForm.module.css'
import Card from './ui/Card'

export default function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function handleSubmit(event){
        event.preventDefault();
        const title = titleInputRef.current.value;
        const image = imageInputRef.current.value;
        const address = addressInputRef.current.value;
        const description = descriptionInputRef.current.value;

        const meeupData = {
            title: title,
            image: image,
            address: address,
            description: description,
        }

        props.onAddMeetupData(meeupData)
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' required id="address" ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Meetup Description</label>
                    <textarea required rows="5" id="description" ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}