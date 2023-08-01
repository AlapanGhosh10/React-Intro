import { useState } from 'react';
import Card from './Card';

const Data = [
    {name: "a", num: 1},
    {name: "b", num: 2}
]

function ListItem({id, name}) {
    console.log(name);
    return <li key={id}>{name}</li>
}

function App({ name }) {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('Even');

    function update() {
        count % 2 === 0 ? setMsg('Odd') : setMsg('Even');
        setCount(count + 1)
    }

    return (
        <>
            <Card>
                <h3>Hello</h3>
            </Card>
            <p>{name} {count}</p>
            <p>{msg}</p>
            <button onClick={update}>Increment</button>
            <hr />
            <ul>   
                {Data.map(({num, name}) => 
                    <ListItem id={num} name={name} />
                )}
            </ul>
        </>
    )
}

export default App;