import PageDivider from '../components/reuseable/PageDivider'
import classes from './PrivateEvents.module.css'
import Headline from '../components/reuseable/Headline'
import Description from '../components/reuseable/Description'
import ImageCollection from '../components/reuseable/ImageCollection';


function InfoClasses(){

    const infoClassesImages = [
        {
            id:"1",
            url:"./infoClassesImages/1.JPG"
        },
        {
            id:"2",
            url:"./infoClassesImages/2.JPG"
        },
        {
            id:"3",
            url:"./infoClassesImages/3.JPG"
        },
        {
            id:"4",
            url:"./infoClassesImages/4.JPG"
        },
    ];

    return(
        <div className={classes.PrivateEventsContent}>
            <PageDivider/>
            <Headline headline="REGULAR CLASSES" />
            <Headline headline="At creativity house, there are both individual and group ceramic lessons" />
            <div className={classes.text}>
                <Description description="We have a beautiful little studio in Chisinau, Buiucani. The studio has transport links nearby but please let us know if you need help finding us!"/>
                <Description description="Group pottery lessons are made up of 5-6 people so that everyone gets their due attention. Individual lessons are held for 1-2 people. The duration of the lesson is 2 hours. We have groups for both adults, children and parents, to have a special, quality and useful time together."/>
                <Description description="Price is 200 lei per person for modeling using red clay, this includes all the materials needed for a lesson. If you want to paint your work, you will also need a second lesson (glazing + modeling a new figure if desired)." />
                <Description description="You can also create with white clay and color the figure with engobe (matte pigment applied to wet clay) in the same lesson." />
            </div>
            <div className={classes.text}>
                <Description description="Price for modeling using white clay lesson::" />
                <ul>
                    <li>250 lei - Modeling.</li>
                    <li>300 lei - Modeling + Angoba</li>
                </ul>
                <Description description="You may also buy a voucher for a lesson as a nice gift for someone who enjoys calm and wholesome atmosphere." />
            </div>  
            <PageDivider/>

            <ImageCollection clientImages={infoClassesImages}/>
                <h2>We are waiting for you!</h2>
            <PageDivider/>  
        </div>
    )
}

export default InfoClasses;