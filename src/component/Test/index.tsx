import React, { useState, useEffect } from "react";

const Test = () => {
    const [data, setData] = useState<number>(0);
    const [city, setCity] = useState<string>('');
    console.log(data);
    return (
        <div>
            <button onClick={() => setData(x => x + 1)}>
                Change
            </button>
            <input type="text" value={city}
                onChange={(e) => { setCity(e.currentTarget.value) 
                // onkeyup={()=>{
                //     if(e.key==='Enter'){
                //         alert({city})
                //     }
                // }}
                }}
            />
            <h1>{data}</h1>

        </div>
    )
}

export default Test;