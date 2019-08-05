import React from "react"
import ReactDOM from 'react-dom'
import MainContext from './Components/MainContext.jsx'
import Announcer from './Components/Announcer.jsx'
import Updater from './Components/Updater.jsx'
import SelectHook from './Components/SelectHook.jsx'


class Main extends React.Component {
    constructor(){
        super();
        var me = this;
        this.state ={
            Winner:"Manh Le",
            Count: 1,
            update:function(x,v){
                this[x] = v;
                me.setState(this);
            }
        }

    }

    render(){
      
        return (
            <MainContext.Provider value={this.state}>
                <Announcer/>
                <Updater/>
                <SelectHook/>
            </MainContext.Provider>
        )
    }
}

export default Main;