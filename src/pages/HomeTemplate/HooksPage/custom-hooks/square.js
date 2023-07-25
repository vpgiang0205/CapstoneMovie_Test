import React, { useState, useEffect } from 'react'
import './style.css'

export default function Square() {
    useEffect(() => {
        const interval = setInterval(() => {
            const newColor = Math.floor(Math.random() * 999999);
            console.log(newColor)
            setColor(`#${newColor}`)

        }, 1000)
        return () => {
            clearInterval(interval);
        }
        
    }, [])

    const [color, setColor] = useState("red");
    return (
        <div className='square' style={{ backgroundColor: color }}>

        </div>
    )
}
