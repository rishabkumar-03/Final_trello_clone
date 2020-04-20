import React from 'react';
import TrelloList from './trello-list';
import { connect } from 'react-redux';
import './trello-list.css';
import TrelloActionButton from './trelloActionButton';
import MenuButton from './menu-button';
import logo from '../trello2copy.jpg';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../Actions/listsActions';
//import UserData from './UserData';
import { Icon } from '@material-ui/core';
import HeaderComponent from './HeaderComponent';

class TrelloBoard extends React.Component {

  
  onDragEnd = ( result ) => {
    const { destination, source, draggableId } = result;

    if(!destination){
      return;
    }

    this.props.dispatch( sort( source.droppableId, 
      destination.droppableId, 
      source.index,
      destination.index,  
      draggableId)
      ); 
      console.log("PROPS DRAG END---DESTINATIOM",destination);
      console.log("PROPS DRAG END---SOURCE",source);
      console.log("DRAGGABLE ID",draggableId);
  };

     

   
  

  render() {
    
    const { lists,heading,color,name } = this.props;
    //console.log("rishab", name);
    
    return (
      <div style={{ height: "100vh", backgroundColor: color}}>
        <div>
          <HeaderComponent name={name} />
          <div style={{ display: "flex", flexDirection: "row",justifyContent: "space-between",maxHeight:"60px"}}>
            <h2 style={{ color: "white", padding: "10px"}}>{ heading }</h2>
            <MenuButton/>
          </div>
          <DragDropContext onDragEnd={ this.onDragEnd }>
            <div className="App">
              {lists.map( list => <TrelloList  listId={ list.listId} key={list.listId} title={ list.title} /> ) }  
              <TrelloActionButton list />
            </div>
          </DragDropContext>      
        </div>
      </div>
      
    );
  }
}


  
  const mapStateToProps = (state) => ({
    color:state.home.color,
    lists: state.lists.listArray,
    heading: state.lists.boardTitle
  });

export default connect(mapStateToProps,null)(TrelloBoard);