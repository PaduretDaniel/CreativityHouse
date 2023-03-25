import PageDivider from '../components/reuseable/PageDivider'
import classes from './PrivateEvents.module.css'
import mainImg from '../res/images/PrivateEvents.JPG'
import Headline from '../components/reuseable/Headline'
import Description from '../components/reuseable/Description'
import ImageCollection from '../components/reuseable/ImageCollection';

function PrivateEvents(){

    const privateEventsImages = [
        {
            id:"1",
            url:"./privateEventImages/1.JPG"
        },
        {
            id:"2",
            url:"./privateEventImages/2.JPG"
        },
        {
            id:"3",
            url:"./privateEventImages/3.JPG"
        },
        {
            id:"4",
            url:"./privateEventImages/4.JPG"
        },
    ];

    return(
        <div className={classes.PrivateEventsContent}>
            <PageDivider/>
            <Headline headline="relax and create" />
            <img className={classes.img} src={mainImg} alt='noImg' />
            <div className={classes.text}>
                <Description description="At Creativity House, we offer an alternative way to connect and relax using the healing powers of clay."/>
                <Description description="Whether you're planning a corporate event, a team-building activity or just want to have fun with family or friends, we'd love to welcome you to a private Master-Class, away from the distractions of the outside world, surrounded by music, snacks and energy. "/>
                <Description description="We can host the course at our beautiful studio or at your offices. Please see below for more information on each option."/>
            
            
            </div>
            <PageDivider/>
            <div className={classes.text}>
                <Headline headline="IN STUDIO EVENTS" />
                <Description description="Some examples of classes we run are:" />
                <ul>
                    <li>Stag/bachelorette parties (eg individual figurines with names or perhaps wedding table gift figurines). This is a chance to create wonderful memories.</li>
                    <li>Team Building (eg creative projects with work/school or university team)</li>
                    <li>Christmas parties (eg a chance to make Christmas tree decorations, candle holders or anything else for a warm atmosphere)</li>
                    <li>A relaxing day on March 8, for women, mothers or pregnant women. Modeling is very useful in this case, it has a therapeutic and calming effect.</li>
                    <li>Or any other beautiful event with creative ideas.</li>
                </ul>

                <Description description="At the Master-Class you will learn various manual modeling techniques to create your little masterpiece. As we value uniqueness and free will, the subject of the lesson is always free, so everyone realizes any idea they want, they can be inspired by our examples in images or real, on the shelves. Also, the number of figurines is not limited." />
                <Description description="To create, any type of clay can be used: red, white or mixed, depending on the desired model. If you choose the white clay, it can be colored exactly at the lesson, but if you choose the red one, we will glaze it after the first firing in the shade of your choice." />
                <Description description="At the end of the class, we will gradually dry the pieces and fire them, glaze them, and then fire them again for you. They will be ready to collect within two weeks of the course." />
                <Description description="Private Master-Classes of manual construction at our studios start from 1700 lei (5 people), up to 3200 lei (10 people). The price includes all necessary materials, professional teaching, rent and a photographer who will capture your special moments and create memories. The price varies depending on your wishes regarding the arrangement of the studio, additional services and the number of people." />
                
            </div>  
            <PageDivider/>
            <div className={classes.text}>
                <Headline headline="EVENTS AT YOUR LOCATION" />
                <Description description="We can also run private team building Master-Classes in your office space. Your workers and colleagues will certainly never forget this day. All the materials will be brought by us, so you have nothing to worry about. All that is required of you is a durable table and chairs for the participants." />
                <Description description="The conditions and price are the same as for private Master-Classes in the studio + payment of transport to your location. Details may also be discussed with our manager" />
                <Description description="Below you can see some examples of completed pieces. "/>
            </div>  
            <ImageCollection clientImages={privateEventsImages}/>
            <PageDivider/>
        </div>
    )
}

export default PrivateEvents;