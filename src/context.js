import React, { useState } from "react";

export const CurrentUserContext = React.createContext({
    currentUser: '',
    setCurrentUser: () => { }
});



const CurrentUser = props => {
    const [currentUser, setCurrentUser] = useState("")

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {props.children}
        </CurrentUserContext.Provider>
    );
}

export default CurrentUser;