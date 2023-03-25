import classes from './CardImage.module.css';

function CardImage(props){

    return (
        <div className={classes.imageContainer}>
            <img className={classes.image} src={props.image.url} alt='noImage' />
        </div>
    )
}

export default CardImage;