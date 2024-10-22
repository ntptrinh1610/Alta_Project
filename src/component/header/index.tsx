import React from "react";
import './style.css'

type ChangeTopic={
    handleChange:(index:number)=>void
}

const Header = (props:ChangeTopic) => {
    
    return (
        <>
            <div className="header">
                <div className="menu">
                    <ul>
                        <li><a onClick={()=>{props.handleChange(1)}}>Flower</a></li>
                        <li><a onClick={()=>{props.handleChange(2)}}>Change Color</a></li>
                        <li><a                 onClick={()=>{
                    localStorage.clear();
                    window.location.reload();
                }}>Log Out</a></li>
                    </ul>
                </div>
                <h1>ALTA ENTERPRISE SEMETER FOR FRONT END</h1>
            </div>
        </>

    )
}

export default Header;