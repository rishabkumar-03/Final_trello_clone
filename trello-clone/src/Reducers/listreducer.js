import { ACTIONS } from '../Actions';

let listId = 3;
let cardId = 5;

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
            cardId:4,
            belongsToList:1,
            title:"Actions",
            description:""
        },
        {
            cardId:3,
            belongsToList:2,
            title:"Debugging",
            description:""
        }
    
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
            let newCardArrayDrag = [...state.cardArray];

            let cardIdcheck = parseInt(draggableId);
            let droppableIdcheck = parseInt(droppableIdEnd);

            if(droppableIdStart === droppableIdEnd) {
                let addCard = newCardArrayDrag.splice(droppableIndexStart, 1);
                newCardArrayDrag.splice(droppableIndexEnd, 0, addCard[0]);
            }

            if(droppableIdStart !== droppableIdEnd){
                
                for(i in newCardArrayDrag){
                    if(newCardArrayDrag[i].cardId===cardIdcheck){
                        newCardArrayDrag[i].belongsToList=droppableIdcheck;
                    }
                } 


            }
            console.log("New Array after drag",newCardArrayDrag);

            return {...state,cardArray:newCardArrayDrag};

        case "DELETECARD":
            
            let newCardArrayDelete = [...state.cardArray];

            let newCardArraySave = newCardArrayDelete.filter(function (el){
                return el.cardId!==action.payload
            });

            

            
            return { ...state,cardArray:newCardArraySave};

        case "MOVECARD":
            
            let newCardArrayMove = [...state.cardArray];
            var i;
            for(i in newCardArrayMove){
                if(newCardArrayMove[i].cardId===action.payload.cardId){
                    newCardArrayMove[i].belongsToList=action.payload.destListid;
                }
            } 

            return { ...state,cardArray:newCardArrayMove};

        case "SETDESCRIPTION":
            
            let newCardArrayDescription = [...state.cardArray];

            var x;
            for(x in newCardArrayDescription){
                if(newCardArrayDescription[x].cardId===action.payload.cardId){
                    newCardArrayDescription[x].description=action.payload.description;
                }
            } 
            
            console.log("New Cards Array Save",newCardArrayDescription);
                   
       
            return { ...state,cardArray:newCardArrayDescription};
            
         default: 
            return state;
    }
};

export default  ListsReducer;


 