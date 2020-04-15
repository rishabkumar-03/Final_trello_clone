import React from 'react';
import logo from '../trello2copy.jpg';
import UserData from './UserData';
import { Icon } from '@material-ui/core';

const HeaderComponent = ({name}) => {
    return(
        <header style={ styles.headerContent}>
            <div style={ { color: "white",display:"flex", flexDirection: "row",margin: "2px", padding: "3px", maxHeight: "40px", maxWidth: "200px", border: "none", borderRadius: "8px", backgroundColor: "hsla(0,0%,100%,.24)"}}>
                <input type="search" style={{ border: "none", borderRadius: "8px", backgroundColor: "hsla(0,0%,100%,.24)"}} />
                <Icon color= "white">search</Icon>
            </div>
            <img src={logo}  alt=" trello" style={{ minWidth: "10px", minHeight: "10px"}}/>
            <UserData name={name}/>
          </header>
    );

}

const styles = {
    headerContent: {
      backgroundColor: "rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "100%",
      paddingRight: "10px",
      paddingLeft: "10px"
  
    }
  };

export default HeaderComponent;

