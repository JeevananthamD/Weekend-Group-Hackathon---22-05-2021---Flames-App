import React, {Component, useState, useRef} from "react";
import '../styles/App.css';

const App = () => {

    const [relation, setRelation] = useState(undefined);
    const first = useRef(null)
    const second = useRef(null)
    
    const submit = () => {
        let name1 = first.current.value;
        let name2 = second.current.value;
        // name1 = name1.toLocaleLowerCase();
        // name2 = name2.toLocaleLowerCase();
        let a = undefined;
        let c = undefined;
        let abc = [];
        let sum = 0;
        if(name1!=="" && name2!=="") {
            for(let i=0;i<name1.length;i++) {
                c = name1.charCodeAt(i);
                a = (c<97)?c-65:c-97;
                if(abc[a]===undefined) {
                    abc[a] = 0;
                }
                abc[a]++;
                // console.log(abc);
            }
            for(let i=0;i<name2.length;i++) {
                c = name2.charCodeAt(i);
                a = (c<97)?c-65:c-97;
                if(abc[a]===undefined) {
                    abc[a] = 0;
                }
                abc[a]--;
            }
            // console.log(abc);
            for(let i=0;i<abc.length;i++) {
                if(abc[i]===undefined) {
                    abc[i] = 0;
                }
                sum = (abc[i]<0)? sum + (-1*abc[i]): sum + abc[i];
            }
            switch(sum%6) {
                case 1: setRelation("Friends"); break;
                case 2: setRelation("Love"); break;
                case 3: setRelation("Affection"); break;
                case 4: setRelation("Marriage"); break;
                case 5: setRelation("Enemy"); break;
                default : setRelation("Siblings"); break;
            }
        }
        else {
            setRelation("Please Enter valid input")
        }
    }

    const clear = () => {
        first.current.value = "";
        second.current.value = "";
        setRelation(undefined);
    }

    return(
        <div id="main">
            <input type="text" ref={first} data-testid="input1"/>
            <input type="text" ref={second} data-testid="input2"/>
            <button onClick={submit} data-testid="calculate_relationship">Calculate Relationship Future</button>
            <button onClick={clear} data-testid="clear">Clear inputs and relationship status</button>
            <h3 data-testid="answer">{relation}</h3>
        </div>
    )
    
}


export default App;
