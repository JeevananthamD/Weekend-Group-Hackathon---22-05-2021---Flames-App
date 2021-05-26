import React, {Component, useState, useRef} from "react";
import '../styles/App.css';

const App = () => {

    const [relation, setRelation] = useState(undefined);
    const first = useRef(null)
    const second = useRef(null)
    
    const submit = () => {
        let name1 = first.current.value;
        let name2 = second.current.value
        name1 = name1.toLocaleLowerCase();
        name2 = name2.toLocaleLowerCase();
        let a = undefined;
        let abc = [];
        let sum = 0;
        for(let i=0;i<name1.length;i++) {
			a = name1.charAt(i)-97;
			abc[a]++;
		}
		for(let i=0;i<name2.length;i++) {
			a = name2.charAt(i)-97;
			abc[a]--;
		}
		for(let i=0;i<abc.length;i++) {
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

        return(
            <div id="main">
               <input type="text" ref={first}/>
               <input type="text" ref={second}/>
               <button onClick={submit}>Submit</button>
               <h3>{relation}</h3>
            </div>
        )
    
}


export default App;
