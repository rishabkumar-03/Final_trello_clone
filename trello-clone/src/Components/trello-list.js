import React from 'react';
import TrelloCard  from './trello-card.js';
import TrelloAddButton from './trelloActionButton';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

const TrelloList = ({ title,listId,cards}) => {
    console.log("Cards",cards);

    const cardsForCurrentList = cards.filter(function (el){
        return el.belongsToList=== listId
    });

    console.log("Cards for Current List",cardsForCurrentList);
    return(
        <Droppable droppableId={String(listId)}>
            { provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="list-conatiner">
                    <h4>{ title }</h4>
                    <div className="card-container">
                        { cardsForCurrentList.map( (card,index) => <TrelloCard  key={ card.cardId } index={index} text={ card.title } id={card.cardId} listid={card.belongsToList} description={card.description} />)}
                    </div>
                    <TrelloAddButton listId={listId} />
                    {provided.placeholder}
                </div>
            )}  
        </Droppable>
        
    );
}

const mapStateToProps = (state) => ({
    cards:state.lists.cardArray
});

export default connect(mapStateToProps)(TrelloList) ;

