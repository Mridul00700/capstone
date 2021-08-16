import React, { useState } from "react";

export const CurrentUserContext = React.createContext();



export default props => {
    const [currentUser, setCurrentUser] = useState("")

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {props.children}
        </CurrentUserContext.Provider>
    );
}

