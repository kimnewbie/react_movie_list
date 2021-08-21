import React, {useState} from 'react'

export default function Rendering() {
    const [condition, setCondition] = useState(false);
    const onClickToggle = () => setCondition(!condition);
    const renderCondition = 
        condition
            ?  'True' 
            :  'False' 
    return (
        <div>
            <h1>Run YJ, Run!🐱‍🏍</h1>
            <div>{renderCondition}</div>
            <button onClick={onClickToggle}>Toggle</button>
        </div>
    )
}
