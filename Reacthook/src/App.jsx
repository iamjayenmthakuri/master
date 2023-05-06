import { useEffect, useState } from "react";

function App({propA, propB}) {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("useEffect : propA or propB changed")
  }[propA, propB])
  return(
  <div><p>count: {count}</p>
  <button onClick={handleClick}>Increment Count</button>
  </div>
)}

export default App;
