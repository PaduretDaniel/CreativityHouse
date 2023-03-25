import classes from './Description.module.css'

function Description(props){
    return (
        <div className={classes.Description}>
            <p className={classes.descriptionText}>
                {props.description}
            </p>
        </div>
    )
}

export default Description;