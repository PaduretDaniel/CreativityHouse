
import Headline from './reuseable/Headline';
import Description from './reuseable/Description';

import classes from './Newsletter.module.css';

import instagramLogo from '../res/images/instagramLogo.png'

function Newsletter(props){

    return( 
        !props.addedEmail ? 
        <>
            <Headline headline={props.headline}/>
            <Description description={props.description}/>
            <div className={classes.emailContainer}>
                <input 
                    type="email" 
                    id="emailAddress" 
                    name="emailAddress" 
                    placeholder="Email Address"
                    value={props.emailAddress}
                    className={classes.emailInput}
                    onChange={props.changeEmail}
                />
                <button 
                    className={classes.action}
                    onClick={props.addEmail}
                >
                    Sign Up
                </button>
            </div>
            <Description 
            description="Or follow us on instagram where you can contact our manager for an appointment"
            />
            <div className={classes.link}>
                <a href='https://www.instagram.com/creativity_housee/'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img 
                        className={classes.instagramLogo}
                        src={instagramLogo} 
                        alt='noImg' 
                    />
                </a>
            </div>
        </>
        : <h1>Thank You!</h1>
    )
}
export default Newsletter;