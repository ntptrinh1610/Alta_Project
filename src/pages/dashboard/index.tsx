import React, { useState } from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import Topic1 from "../../component/Topic1";
import Topic2b from "../../component/Topic2b";


const Dashboard=()=>{
    const [selectedIndex,setSelectedIndex]=useState(1);
    const recieveIndex =(index:number)=>{
        setSelectedIndex(index)
    }
    return (
        <>
            <Header handleChange={recieveIndex}/>
            {selectedIndex==1?<Topic1/>:<Topic2b/>}
            <Footer/>
        </>
    )
}

export default Dashboard;