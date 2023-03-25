import classes from './Headline.module.css'

function Headline(props){
    return (
        <h1 className={classes.Headline}>
            {props.headline}
        </h1>
    )
}

export default Headline;