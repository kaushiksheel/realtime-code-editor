import { createContext, useState } from "react";

export const PostContext=createContext();



export const PostContextProvider=({children})=>{
    const[code,setCode]=useState("");
    const[selectedLanguage,setSelectedLanguage]=useState("");

    const[joinedUsers,setJoinedUsers]=useState([]);
    return (
        <PostContext.Provider value={{code,setCode,selectedLanguage,setSelectedLanguage,joinedUsers,setJoinedUsers}}>
            {children}
        </PostContext.Provider>
    )
}