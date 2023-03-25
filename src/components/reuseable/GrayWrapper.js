import classes from './GrayWrapper.module.css';

function GrayWrapper(props){

    return (
        <div className={classes.GrayWrapper}>
            {props.children}
        </div>
    )
}

export default GrayWrapper;