import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { setColor} from '../Actions/homepageActions';
//import InputLabel from '@material-ui/core/InputLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';


class MenuButton extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            menuState:false
        }
    }
    
    handleChange = () =>{
        this.setState({menuState:!this.state.menuState});
    }
    handleYellowColor = () => {
        this.props.setColor("rgb(210,144,52)");
    }
    handleRedColor = () => {
        
        this.props.setColor("rgb(176,70,50)");
    }
    handleGreenColor = () => {
        
        this.props.setColor("rgb(60,179,113)");
    }

  

    render(){
         
        

    return(
        (this.state.menuState===false)?
        (<button onClick={this.handleChange}  style={{ backgroundColor: "hsla(0,0%,100%,.24)", 
                                                color: "white",
                                                height: "40px", 
                                                width: "120px" , 
                                                border: "none",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                margin: "10px"}}> Show Menu</button>):
        (
            <div style={styles.MenuDiv}>
                <div>Choose background</div>
                <div>
                    <button onClick={this.handleYellowColor} style={ { backgroundColor: "rgb(210,144,52)", height: "40px", width: "60px", margin: "3px", border: "none"}}> </button>
                    <button onClick={this.handleRedColor} style={ { backgroundColor: "rgb(176,70,50)", height: "40px", width: "60px", margin: "3px", border: "none"} }> </button>
                    <button onClick={this.handleGreenColor} style={ { backgroundColor: "rgb(60,179,113)", height: "40px", width: "60px", margin: "3px", border: "none"} }> </button>

                </div>
                <Button onClick={this.handleChange} variant="contained" style={{ color: "white", backgroundColor: "#5aac44"}}> EXIT</Button>
            </div>
            
        )
    )
    }
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

const mapDispatchToProps = dispatch => ({
    setColor: color => dispatch(setColor(color))
  });



export default connect(null,mapDispatchToProps)(MenuButton);