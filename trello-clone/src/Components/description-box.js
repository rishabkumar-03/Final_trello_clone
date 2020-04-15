import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from 'react-textarea-autosize';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useDispatch,useSelector } from 'react-redux';

import {deleteCard,moveCard,setDescription} from '../Actions/cardActions'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// -------------------------CUSTOMIZED DIALOG-----------------------------------------

const CustomizedDialogs = ( {text,id,listid,description}) => {

  const lists = useSelector(state=>state.lists.listArray);
  console.log("Lists---->Description Box",lists);
  console.log("List ID CHECKKKK ---------------------->>>>",listid);

  const [destList,setDestList] = React.useState(listid);
  console.log("Destination List ID",destList);

  const descriptionDialog = React.useRef('');

  // console.log("Description ref",descriptionDialog.current);

  console.log("Description",description);

  const [open, setOpen] = React.useState(false);
  
  
  const dispatch = useDispatch();

  console.log("Hi from Description Dialog....PROPS",text,id,listid);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseNdelete = () => {
    setOpen(false);
    dispatch(deleteCard(id));
  };

  const handleCloseNMove = () => {
    setOpen(false);
    dispatch(moveCard(id,destList));
  };

  const handleListChange= (e) => {
    setDestList(parseInt(e.target.value));
  };


  const handleData= () => {
      descriptionDialog.current.value = description;
  };

  const handleCloseNSave= () => {
    setOpen(false);
    console.log("Present Description",descriptionDialog.current.value);
    let newDescription = descriptionDialog.current.value;
    dispatch(setDescription(newDescription,id));
  };
  


  

  return (
    <div>
      <button variant="outlined" color="primary" onClick={handleClickOpen}>
        ...
      </button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth = {true} maxWidth = {'sm'}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <b>CARD MENU</b>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Typography component="div"> Card Title :<b> {text} </b></Typography>
            
            <Typography component="h2" style={{marginTop:"10px"}}>Description</Typography>
            <TextField
            variant="outlined"
            inputRef={descriptionDialog}
            //value={descriptionDialog.current}
            onClick={handleData}
            placeholder={description}
            required
            fullWidth
            id="description"
            
            name="description"
            
            
          />

            </Typography>
        </DialogContent>

        <div>
        <Button autoFocus onClick={handleCloseNMove} color="primary" style={{marginLeft:"220px",marginTop:"10px"}}>
                  Move  card
        </Button>
        <FormControl >
                    <InputLabel htmlFor="destination-native-simple">Dest List</InputLabel>
                    <Select
                        //size="large"
                        native
                        value={destList}
                        onChange={handleListChange}
                        inputProps={{
                         name: 'Color',
                        id: 'color-native-simple',
                         }}
                    >
                    {lists.map( list => <option value={list.listId} key={list.listId}>{list.title}</option>)}
                    
                    </Select>
                </FormControl>
        </div>
        
        
            
          
          <Button autoFocus onClick={handleCloseNSave} color="primary">
              Save Description
            </Button>
            
            <Button autoFocus onClick={handleCloseNdelete} color="primary">
              Delete Card
            </Button>
          
        
      </Dialog>
    </div>
  );
}

export default CustomizedDialogs;