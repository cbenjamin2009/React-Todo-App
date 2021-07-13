import React from "react"

const Header = () => {
    //inline styles are intentional 
    // Double curly brace -> This is becuase first set is to denote javascript and second set is to denote a object 
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5em",
    }
    return (
        <header style={headerStyle}>
            <h1
            style={{
                fontSize: "6rem",
                fontWeight: "600",
                marginBottom: "2rem",
                lineHeight: "1em",
                color: "#ececec",
                textTransform:"lowercase",
                textAlign: "center"
            }}>
            Task Master</h1>
        </header>
    )
}

export default Header