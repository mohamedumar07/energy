import React from 'react'
import "./Input.css"

function Input()
{
    return(
        <div class="input">
            <label for="unit">Enter your consumption unit:
                <input type="text" id="text"></input>
            </label>
            <br></br>
            <button id="generate" r>Generate</button>
        </div>
    )
}

export default Input;