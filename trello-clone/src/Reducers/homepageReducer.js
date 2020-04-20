const initialState={
    loginLevel:0,
    nameUser:null,
    color:"rgb(60,179,113)",
}

const HomeReducer = (state=initialState,action) =>{
    switch(action.type){
        case "SETCOLOR":
            let newColor = action.payload;
            return {...state, color: newColor}
            
        case "SETLOGINLEVEL":
            let level = action.payload;
            return {...state, loginLevel: level}

        case "SETNAMEUSER":
            let name = action.payload;
            return {...state, nameUser: name}
            

    default:
        return state;

    }

}

export default HomeReducer;