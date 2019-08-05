import React, {useState} from 'react'
import ReactDOM from 'react-dom'

function SelectHook() {
    var [sel,setSel] = useState(0);
    const os = ["One", "Two", "Tree"];

    function change(e){
        setSel(e.target.selectedIndex);
    }

    return (
    <div>
        <select onChange={change}>
            {os.map((o,i)=><option selected={i===sel} value={i}>{os[i]}</option>)}
        </select> - <span>Selected: {os[sel]}</span>
    </div>
    )
}

export default SelectHook;