import { useState } from "react";
import Header from "../src/components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header title="Mouse Tracker" initialCount={count} />
    </div>
  );
}

export default App;
