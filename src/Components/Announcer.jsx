import React from "react"
import ReactDOM from 'react-dom'
import MainContext from './MainContext.jsx'

export default class Announcer extends React.Component{
    constructor(){
        super()
    }

    render(){
        var ctx = this.context;
        return (
            <div>
                <span>{ctx.Winner} has won </span><button>{ctx.Count}</button> time(s).
            </div>
        )
    }
}

Announcer.contextType = MainContext;