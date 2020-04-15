import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import 'typeface-roboto';
import { Draggable } from 'react-beautiful-dnd';
import CustomizedDialogs from './description-box';



const TrelloCard = ({ text,id,index,listid,description}) => {
    console.log("ListId",listid);
    return(
        <Draggable draggableId={String(id)} index={index} >
            { provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <div className="card-content" >
                        <Card>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <Typography  gutterBottom>
                                    {text}
                                </Typography>
                                <CustomizedDialogs text={ text } id={id} listid={listid} description={description} /> 
                            </div>                                        
                        </Card>
                    </div>
                </div>   
            )}  
        </Draggable>
             
    );
}



export default TrelloCard;