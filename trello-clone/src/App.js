import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import SignIn from './VIEWS/signIn';
import TrelloBoard from './Components/TrelloBoard';

const App =({loginLevel,nameUser})=> {

  //console.log("USER DETAILS",loginLevel,nameUser);

  return (
    (loginLevel===0)?
    (<SignIn/>):(<TrelloBoard name={nameUser}/>)
  )
     
      
    
  };

  const mapStateToProps = (state) => ({
    loginLevel:state.home.loginLevel,
    nameUser: state.home.nameUser
    
  });

export default connect(mapStateToProps)(App) ;











  
  


