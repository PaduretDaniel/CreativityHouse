import PageDivider from '../components/reuseable/PageDivider'
import Headline from '../components/reuseable/Headline'
import classes from './About.module.css'

import instagramLogo from '../res/images/instagramLogo.png'
import facebookLogo from '../res/images/facebookLogo.png'
import phoneLogo from '../res/images/phoneLogo.png'

function About(){
    return(
        <div>
            <PageDivider />
            <Headline headline="How to find us"/>
            <div className={classes.text}>
                <h1>Location: </h1> 
                <p>Alba Iulia 75D str. </p>
            </div>
            
            <div className={classes.text}>
                <h1>Contacts:</h1> 
            </div>
            <div className={classes.text}>
                <a href='https://www.instagram.com/creativity_housee/'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className={classes.logo} src={instagramLogo} alt='noImg' /> 
                </a>
                <p className={classes.logoText}>@creativity_housee</p>
            </div>
            <div className={classes.text}>
                <a href='https://www.facebook.com/creativity.housee'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className={classes.logo} src={facebookLogo} alt='noImg' /> 
                </a>
                <p className={classes.logoText}>Creativity House</p>
            </div>
            <div className={classes.text}>
                <img className={classes.logo} src={phoneLogo} alt='noImg' /> 
                <p className={classes.logoText}>(+373) 689 721 54</p>
            </div>
            
            <PageDivider />
        </div>
    )
}

export default About;