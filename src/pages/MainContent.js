import {useEffect, useState} from 'react'

import Headline from '../components/reuseable/Headline';
import Modal from '../components/Modal';
import PageDivider from '../components/reuseable/PageDivider';
import ImageCollection from '../components/reuseable/ImageCollection';
import GrayWrapper from '../components/reuseable/GrayWrapper';
import ImageSlider from '../components/ImageSlider';
import Description from '../components/reuseable/Description';
import Newsletter from '../components/Newsletter';

import classes from './MainContent.module.css';


function MainContent(){

    //localStorage.clear();

    const[email, setEmail] = useState({emailAddress:""});
    const[addedEmail, setAddedEmail] = useState(false);
    const[emailList, setEmailList] = useState(() => {
        return JSON.parse(localStorage.getItem('newsletterEmails')) || []
    });
 
    const[showModal, setShowModal] = useState(false)

    //Used localStorage as a way to simulate a database
    useEffect(() => {
        localStorage.setItem('newsletterEmails', JSON.stringify(emailList));
        const temp = JSON.parse(localStorage.getItem('newsletterEmails'))
        console.log(temp);
        
    }, [emailList])

    function handleChangeEmail(event){
        const {name, value} = event.target
        setEmail(() => {
            return{ [name]:value }
        });
    }

    //Simulate adding emails to a database
    function handleAddEmail(){
        setEmailList(prevState =>{
            return([...prevState, email])
        })
        setAddedEmail(prevState => true)
        
    }

    function handleShowModal(){
        setShowModal(prevState => !prevState)
    }

    const clientImages = [
        {
            id:"1",
            url:"./clientImages/client1.JPG"
        },
        {
            id:"2",
            url:"./clientImages/client2.JPG"
        },
        {
            id:"3",
            url:"./clientImages/client3.JPG"
        },
        {
            id:"4",
            url:"./clientImages/client4.JPG"
        },
    ];

    return (
        <div className={classes.mainContent}>            
            <PageDivider />

            <Headline headline="Be creative"/>
            <ImageSlider />
            <Description description="Pottery lessons every Tuesday and Sunday, 10.30am-7.00pm."/>
            <PageDivider />

            <Headline headline="Our Clients"/>
            <ImageCollection clientImages={clientImages}/>
            <Description description="We invite you to join our lessons at Creativity House, in our quiet and comfortable little studio with the kindest and most careful teacher- D. Tatiana, for a creative workshop. To read more and make an apoiment, please click the button below."/>
            <button 
                className={classes.action}
                onClick={handleShowModal}
            >
                Make an appointment
            </button>
            <PageDivider />
            <GrayWrapper>
                <Newsletter 
                    addedEmail={addedEmail}
                    headline="Newsletter"
                    description="Please sign up below to receive information about our upcoming special events and exhibitions."
                    emailAddress={email.emailAddress}
                    changeEmail={handleChangeEmail}
                    addEmail={handleAddEmail}
                />
            </GrayWrapper>

            {showModal ? <Modal closeModal={handleShowModal} /> : null}
            <PageDivider />
        </div>
    )
}

export default MainContent;