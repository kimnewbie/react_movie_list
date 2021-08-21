import React, {useEffect, useState} from 'react'

export default function Count(props) {
    const [count, setCount] = useState(0);
    
    const onClickCalculator = (e) => {
        if(e.target.value === 'increment') setCount(count+1);
        else setCount(count-1);
    }

    // const onClickIncrement = () => { setCount(count + 1); }
    // const onClickDecrement = () => { setCount(count - 1); }

    useEffect(() => {
        console.log(count);
    }, [count]) // count가 변경될 때만 실행하게, [] 빈 것은 1번 실행

    // props 받아오는 지 확인
    const clickString = props.click || 'Click';

    return (
        <div>
            <h1>{count}</h1>
            <button value="increment" onClick={onClickCalculator}>+</button>
            <button value="decrement"  onClick={onClickCalculator}>-</button>
            {clickString}
        </div>
    )
}
