/*** 
 * MAIN.JS!.
 */

import React from "react";
import Contacts from "./Contacts";
import Hall from "./Hall";
import Split from 'react-split'


const Chat = () => {
    return (
        <div className="flex h-[90.5vh]">
                <Contacts />
                <Hall />
        </div>
    )
}

export default Chat;