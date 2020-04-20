export const setColor = (color) =>{
     return{
        type:"SETCOLOR",
        payload:color
    }

}

export const setLoginLevel = (value) =>{
    return{
        type:"SETLOGINLEVEL",
        payload:value
    }
}

export const setNameUser = (value) =>{
    return{
        type:"SETNAMEUSER",
        payload:value
    }
}