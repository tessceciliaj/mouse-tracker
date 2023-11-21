import Footer from './components/Footer'
import { useState } from 'react'
import Header from '../src/components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex min-h-full flex-col bg-darkColor px-4 text-neutral-50 md:px-8'>
      <Header title='Mouse Tracker' initialCount={count} />
      <main className='flex h-full grow items-center justify-center md:flex-row md:justify-around'>
        <h1>content</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
