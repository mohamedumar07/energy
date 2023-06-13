import React from 'react'
import "./Input.css"
import "./Generate"
import Generate from './Generate';

class Input extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
          value: 0,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this._onBlue = this._onBlue.bind(this);
      }
      _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }

      _onBlue(event)
      {
        this.setState(
            {
                value: event.target.value,
            }
        )
      }

    render(){
    return(
      <div>
        <div>
          <h1>SHAN ENERGY PVT LTD.</h1>
        </div>
        <div class="input">
            <label for="unit">Enter your consumption unit:
                <input type="text" id="text" onBlur={this._onBlue}></input>
            </label>
            <br></br>
            <button id="generate" onClick={this._onButtonClick}>Generate</button>
            {this.state.showComponent ?
          <Generate value={this.state.value}/> :
          null
       }
        </div>
        </div>
    )
    }
}

export default Input;