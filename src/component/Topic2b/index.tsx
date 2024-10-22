import React, { useState, useEffect } from "react";
import './style.css'

const Topic2b = ()=>{
    const [status,setStatus]=useState(true);
    useEffect(
        ()=>{
            console.log('I run just 1 time')
        },[status])

    return (
        <>
        <div className="container2b">
            <div className="item2b" style={{backgroundColor:status?'#0000FF':'#FF0000'}}>

            </div>
            <div className="button">
                <button className="buttonStyle" onClick={()=>setStatus(!status)} >Change Color</button>
            </div>
            <div className="item2b" style={{backgroundColor:status?'#FF0000':'#0000FF'}}>

            </div>
        </div>  
        </>
    )
}

export default Topic2b;