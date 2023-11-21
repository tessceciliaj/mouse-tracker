import Footer from './components/Footer'
import { useState } from "react";
import Header from "../src/components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <main className='flex items-center grow h-full justify-center md:flex-row md:justify-around'>
      <Header title="Mouse Tracker" initialCount={count} />
      </main>
      <Footer />
    </div>
  )
}

export default App
