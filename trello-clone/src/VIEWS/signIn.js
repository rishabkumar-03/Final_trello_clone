import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {setLoginLevel,setNameUser} from '../Actions/homepageActions';
import {useDispatch,useSelector} from 'react-redux'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const users=[
  {
    id:0,
    name:"JW",
    username:"john97",
    password:"liverpool"
  },
  {
    id:1,
    name:"RK",
    username:"rishab123",
    password:"rish123"

  }
];

export default function SignIn(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const usernameRef = React.createRef("");
  const passwordRef = React.createRef("");

  const handleLoginSubmit = () =>{
    
    let userObj = users.filter(function(el){
      return el.username===usernameRef.current.value
    });
    
    let passwordCheck = userObj[0].password;

    if(passwordRef.current.value===passwordCheck){
      let nameUser = userObj[0].name;
      dispatch(setNameUser(nameUser));
      dispatch(setLoginLevel(1));
    }
    else{
      usernameRef.current.value="";
      passwordRef.current.value="";
    }
   
      
  }

  return (
    <Container component="main" maxWidth="xs" style={{marginTop:"150px"}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            inputRef={usernameRef}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="username"
            
            autoFocus
          />
          <TextField
            variant="outlined"
            inputRef={passwordRef}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
             
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLoginSubmit}
            className={classes.submit}
          >
            Sign In
          </Button>
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}