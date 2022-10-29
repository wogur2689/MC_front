import React, { useState, useEffect } from "react";

function Number() {
    const [htmlCode, setHtmlCode] = useState('');

    useEffect(() => {
        for(var i = 1; i < window.innerHeight; i++) {
            setHtmlCode(i);
        }
        console.log(window.innerHeight / 10);
        console.log('hi2');
    }, []);

    return (
        <div id="html_code">
            {htmlCode}
        </div>
    ); 
}

export default Number;