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
            cardId:3,
            belongsToList:1,
            title:"Debugging",
            description:""
        },
        {
            cardId:4,
            belongsToList:2,
            title:"Re ordering logic",
            description:""
        },
    
    ]
} 

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const list1 = a.belongsToList;
    const list2 = b.belongsToList;
  
    let comparison = 0;
    if (list1 > list2) {
      comparison = 1;
    } else if (list1 < list2) {
      comparison = -1;
    }
    return comparison;
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

            
              
              newCardArray.sort(compare);

              console.log("NEWWW ARAYYYYY",newCardArray);

            return { ...state,cardArray:newCardArray};
          

        case ACTIONS.AFTER_DRAG:
            const { droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                draggableId } = action.payload;
            
            let newCardArrayDrag = [...state.cardArray];

            let cardIdcheck = parseInt(draggableId);
            let droppableIdEndcheck = parseInt(droppableIdEnd);
            let droppableIdStartcheck = parseInt(droppableIdStart);

            if(droppableIdStartcheck === droppableIdEndcheck) {

                let startindex=0;
                let endindex=0;
                var d;

                for(d in newCardArrayDrag){
                    
                    if(newCardArrayDrag[d].belongsToList===droppableIdStartcheck){
                        
                         break;
                    }
                } 

                console.log("DDD Index",d);

                let a = parseInt(d);

                console.log("Droppable Index Start",droppableIndexStart);
                console.log("Droppable Index End",droppableIndexEnd);
                startindex = a + droppableIndexStart;
                endindex = a + droppableIndexEnd;

                console.log("START and End Index",startindex,endindex);


                let addCard = newCardArrayDrag.splice(startindex, 1);
                newCardArrayDrag.splice(endindex, 0, addCard[0]);
            }

            if(droppableIdStartcheck !== droppableIdEndcheck){
                var z;
                for(z in newCardArrayDrag){
                    
                    if(newCardArrayDrag[z].cardId===cardIdcheck){
                         break;
                    }
                } 

                console.log("Index",z);
                let addCard1 = newCardArrayDrag.splice(z, 1);
                console.log(addCard1,newCardArrayDrag);

                addCard1[0].belongsToList = droppableIdEndcheck;

                let insertindex=0;
                var p;

                for(p in newCardArrayDrag){
                    
                    if(newCardArrayDrag[p].belongsToList===droppableIdEndcheck){
                        
                         break;
                    }
                } 

                console.log("DDD Unequal  Index",p);

                let m =parseInt(p);

                insertindex=m + droppableIndexEnd;
               
                newCardArrayDrag.splice(insertindex,0,addCard1[0]);

                //newCardArrayDrag.sort(compare);


            }
            console.log("New Array after drag",newCardArrayDrag);

            return { ...state,cardArray:newCardArrayDrag};

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
            newCardArrayMove.sort(compare);

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


 