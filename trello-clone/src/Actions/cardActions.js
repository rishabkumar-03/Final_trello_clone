import { ACTIONS } from '../Actions';

export const addCard = ( listId,text ) => {
    return{
        type: ACTIONS.ADD_CARD ,
        payload: { listId,text }
    };
};

export const deleteCard=(cardIndex)=>{
    return{
        type: "DELETECARD",
        payload: cardIndex
    }
}

export const moveCard=(cardId,destListid)=>{
    return{
        type : "MOVECARD",
        payload: {cardId,destListid}
    }
}

export const setDescription =(description,cardId)=>{
    return{
        type:"SETDESCRIPTION" ,
        payload: {description,cardId}
    }
}

