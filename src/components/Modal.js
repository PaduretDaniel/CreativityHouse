import { useState, useEffect } from 'react';
import classes from './Modal.module.css'

function Modal(props){

    // localStorage.clear();

    const [appointment, setAppointment] = useState({
        personName:"",
        personEmail:"",
        groupType:"child",  // Two possible group types, Children and Adults
        personDate:""
    })
    const[addedAppointment, setAddedAppointment] = useState(false);

    const [allAppointments, setAllAppointments] = useState(() => {
        return JSON.parse(localStorage.getItem("appointments")) || []
    })


    const {closeModal} = {...props}

    useEffect(() =>{
        localStorage.setItem("appointments", JSON.stringify(allAppointments))
        const temp = JSON.parse(localStorage.getItem('appointments'))
        console.log(temp);


        if(addedAppointment) 
            closeModal();
    }, [allAppointments, addedAppointment, closeModal])


    function handleChangeAppointment(event){
        const {name, value} = event.target
        setAppointment((prevState) => {
            return{ 
                ...prevState,
                [name]:value 
            }
        });
    }

    function handleAddAppointment(event){
        event.preventDefault();
        setAllAppointments(prevState =>{
            return([...prevState, appointment])
        })
        setAddedAppointment(prevState => true)
    }


    return(
        <div className={classes.backdrop}
        >
            <div className={classes.Modal}>
                <form className={classes.form}>
                    <div>
                        <label htmlFor='personName'>Enter name:</label>
                        <input
                            type='text'
                            name='personName'
                            id='personName'
                            className={classes.input}
                            value={appointment.personName}
                            onChange={handleChangeAppointment}
                        />
                    </div>
                    <div>
                    <label htmlFor='personEmail'>Enter email:</label>
                    <input
                        type='email'
                        name='personEmail'
                        className={classes.input}
                        value={appointment.personEmail}
                        onChange={handleChangeAppointment}
                    />
                    </div>
                    <div>
                    <label htmlFor='groupType'> Pick a group: </label>
                        <select 
                            name="groupType"
                            className={classes.select}
                            value={appointment.groupType}
                            onChange={handleChangeAppointment}
                        >
                            <option value="children">Children</option>
                            <option value="adult">Adult</option>
                        </select>
                    </div>
                    <div>
                    <label> Pick a date:</label>
                    <input
                        type='date'
                        name='personDate'
                        className={classes.date}
                        value={appointment.personDate}
                        onChange={handleChangeAppointment}
                    />
                    </div>
                    <button
                        className={classes.action}
                        onClick={handleAddAppointment}
                    >
                        Confirm appointment
                    </button>
                    <button
                        className={classes.action}
                        onClick={props.closeModal}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal;