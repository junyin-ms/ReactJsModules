import './App.css';
import * as React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("useEffect run", count);
    const id = setInterval(() => {
      console.log("Before setCount", count);
      setCount(count + 1);
      console.log("After setCount", count);
    }, 1000);
    return () => {
      console.log("useEffect cleanup", count);
      clearInterval(id);
    }
  }, []);

  console.log("Render", count);
  return <h1>{count}</h1>;
}

export default App;
