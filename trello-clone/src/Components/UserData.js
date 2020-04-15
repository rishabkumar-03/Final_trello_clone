import React from 'react';

const UserData = ({name}) => {
    return(
        <div style={styles.userDiv}>
            <p>{ name }</p>
        </div>
    )
}

//hsla(0,0%,100%,.24)

const styles = {
    userDiv: {
        color: "white",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "hsla(0,0%,100%,.24)",
        textAlign: "center"
    }
}

export default UserData;