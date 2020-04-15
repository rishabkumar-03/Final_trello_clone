import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {SetMenu, SetColor} from '../Actions/homepageActions';
import InputLabel from '@material-ui/core/InputLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const MenuButton = (props) =>{
    console.log("Menu Button Props---->",props.menu);
    const [color,setColor] = React.useState("blue");
    const menuState = props.menu;
    const {dispatch} = props;

    const handleChange = () =>{
        console.log("Handle change---> BUtton");
         dispatch(SetMenu(!menuState));
    }
    const handleRedColor = () => {
        dispatch(SetColor("rgb(210,144,52)"));
    }
    const handleGreenColor = () => {
        dispatch(SetColor("rgb(176,70,50)"));
    }

    const handleChangeColor = (e) => {
        //dispatch(SetColor("rgb(60,179,113)"));
        let newColor = e.target.value;
        console.log("New Color",newColor);
        setColor(newColor);
        dispatch(SetColor(newColor));
    }

    return(
        (menuState===false)?
        (<button onClick={handleChange}  style={{ backgroundColor: "hsla(0,0%,100%,.24)", 
                                                color: "white",
                                                height: "40px", 
                                                width: "120px" , 
                                                border: "none",
                                                borderRadius: "5px",
                                                margin: "10px"}}> Show Menu</button>):
        (
            <div style={styles.MenuDiv}>
                <div>Choose background</div>
                <div>
                    <button onClick={handleRedColor} style={ { backgroundColor: "rgb(210,144,52)", height: "40px", width: "60px", margin: "3px", border: "none"}}> </button>
                    <button onClick={handleGreenColor} style={ { backgroundColor: "rgb(176,70,50)", height: "40px", width: "60px", margin: "3px", border: "none"} }> </button>
                </div>
                <Button onClick={handleChange} variant="contained" style={{ color: "white", backgroundColor: "#5aac44"}}> EXIT</Button>
            </div>
            
        )
    )
}

const styles={
    ColorButtons: {
        padding: "5px",
        margin: "3px",

    },
    MenuDiv:{
        color: "white",
        width:"auto",
        height:"645px",
        backgroundColor:"rgba(0,0,0,0.15)",
        padding: "10px"
    }
}

const mapStateToProps = (state) => {
    return{
     menu : state.home.menuOpen,
    }
    
  };

export default connect(mapStateToProps)(MenuButton);