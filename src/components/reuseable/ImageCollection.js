import CardImage from './CardImage'

import classes from './ImageCollection.module.css';

function ImageCollection(props){

    const images = props.clientImages.map( item => {
        return(
            <CardImage key={item.id} image={item} />
        )
    })

    return (
        <div className={classes.ImageCollection}>
            {images}
        </div>
    )
}

export default ImageCollection;