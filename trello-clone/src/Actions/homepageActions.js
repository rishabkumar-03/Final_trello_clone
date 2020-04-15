export const SetColor = (color) =>{
    return{
        type:"SETCOLOR",
        payload:color
    }

}

export const SetMenu = (value) =>{
    return{
        type:"SETMENU",
        payload:value
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