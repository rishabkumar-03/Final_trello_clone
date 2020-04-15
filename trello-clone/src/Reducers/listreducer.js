import { ACTIONS } from '../Actions';

let listId = 3;
let cardId = 4;

const initialState = {
    boardTitle: 'App planning',
    listArray: [
        {
            listId: 1,
            title: 'To-Do',
        },
        {
            listId: 2,
            title: 'Doing',
        }

    ] ,

    cardArray:[
        {
            cardId:1,
            belongsToList:1,
            title:"Components",
            description:"Different Components"
        },
        {
            cardId:2,
            belongsToList:1,
            title:"Reducers",
            description:"Reducers for actions"
        },
        {
            cardId:3,
            belongsToList:2,
            title:"Debugging",
            description:""
        },
    
    ]
} 



const ListsReducer = (state= initialState, action) => {
    switch(action.type){

        case ACTIONS.ADD_LIST:
            const newList = {
                listId: listId,
                title: action.payload
            }
            listId = listId + 1;
            let newListArray = [...state.listArray];
            newListArray.push(newList);
            return {...state, listArray: newListArray};

        case ACTIONS.ADD_CARD:
            const newCard = {
                cardId: cardId,
                belongsToList:action.payload.listId,
                title: action.payload.text,
                description:""
            }
            cardId += 1;

            let newCardArray = [...state.cardArray];
            newCardArray.push(newCard);

            return { ...state,cardArray:newCardArray};
          

        case ACTIONS.AFTER_DRAG:
            const { droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                draggableId } = action.payload;
            const newState = {...state};
            if(droppableIdStart === droppableIdEnd) {
                let dropList = state.listArray.find( list => droppableIndexStart === list.id );
                const card = dropList.cards.splice(droppableIndexStart, 1);
                dropList.cards.splice(droppableIndexEnd, 0, ...card);
                
            }

            if(droppableIdStart !== droppableIdEnd){
                const newStartList = state.listArray.find( list => droppableIndexStart === list.id );

                const card = newStartList.cards.splice( droppableIndexStart, 1);

                const newDropList = state.listArray.find( list => droppableIndexEnd === list.id );

                newDropList.cards.splice( droppableIndexEnd, 0, ...card);

            }

            return newState;

        case "DELETECARD":
            
            let newCardArrayDelete = [...state.cardArray];

            let newCardArraySave = newCardArrayDelete.filter(function (el){
                return el.cardId!==action.payload
            });
            
            return { ...state,cardArray:newCardArraySave};

        case "MOVECARD":
            
            let newCardArrayMove = [...state.cardArray];
            let cardpos = action.payload.cardId - 1 ;
            newCardArrayMove[cardpos].belongsToList = action.payload.destListid; 

            return { ...state,cardArray:newCardArrayMove};

        case "SETDESCRIPTION":
            
            let newCardArrayDescription = [...state.cardArray];
            let cardposNew = action.payload.cardId - 1 ;
       
            newCardArrayDescription[cardposNew].description = action.payload.description;
       
            console.log("New Cards Array Save",newCardArrayDescription);
                   
       
            return { ...state,cardArray:newCardArrayDescription};
            
         default: 
            return state;
    }
};

export default  ListsReducer;


 