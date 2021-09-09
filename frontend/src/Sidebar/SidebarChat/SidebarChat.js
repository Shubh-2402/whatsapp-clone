import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />

            <div className="sidebarChat__info">
                <h2>Name</h2>
                <p>hello</p>
            </div>
            
        </div>
    )
}

export default SidebarChat
