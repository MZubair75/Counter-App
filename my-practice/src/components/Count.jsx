import {useState} from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Count = {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <button onClick={() => setCount(count - 1)}>Decrease Count</button>

    </div>
  )
}

export default Count;