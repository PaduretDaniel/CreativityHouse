import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import classes from './ImageSlider.module.css'

function ImageSlider(){
    const slideImages = [
        {
          id:"1",
          url: './workshopImages/workshop1.JPG'
        },
        {
          id:"2",
          url: './workshopImages/workshop2.JPG'
        },
        {
          id:"3",
          url: './workshopImages/workshop3.JPG'
        },
        {
          id:"4",
          url: './workshopImages/workshop4.JPG'
        }
      ];
      
    const imgStyle = {

      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '500px', //Full images can be seen at 700px but that's too high
      borderRadius: '1em',
      border:'2px solid #ddd'
    }

    return (
        <div className={classes.slideContainer}>
            <Slide>{
                slideImages.map((slideImage, index)=> (
                    <div key={index}>
                        <div style={{ ...imgStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                    </div>
                ))
            }</Slide>
      </div>
    )
}

export default ImageSlider;