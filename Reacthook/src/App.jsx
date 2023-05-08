/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useState } from "react";

function App({ propA, propB }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect : propA or propB changed");
  }, [propA, propB]);

  const memoizedValue = useMemo(() => {
    console.log(" useMemo : expensive calculation");
    return propA * 2;
  }, [propA]);

  const handleClick = useCallback(() => {
    console.log("useCallback: handleClick called");
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <p>
        PropA * 2:
        {memoizedValue}
      </p>
    </div>
  );
}

export default App;
