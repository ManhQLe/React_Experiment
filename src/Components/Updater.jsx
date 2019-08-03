import React from 'react'
import ReactDOM from 'react-dom'
import MainContext from './MainContext.jsx'

export default class Updater extends React.Component{
    constructor(){
        super();
    }    

    textChange(e){        
        var ctx = this.context;
        ctx.update("Winner",e.target.value)
    }

    increase(){
        let ctx = this.context;
        ctx.update("Count",ctx.Count+1 );
    }

    render(){
        var ctx = this.context;

        return (<div>
            <div>Interact with below for update</div>
            <span>Winner: </span> <input onChange={this.textChange.bind(this)} value={ctx.Winner}/>
            <br/>
            <button onClick={this.increase.bind(this)}>Increase {ctx.Count}</button>            
        </div>)

    }
}

Updater.contextType = MainContext;