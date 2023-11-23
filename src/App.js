import Footer from './components/Footer'
import { useState } from 'react'
import Header from '../src/components/Header'
import Card from './components/Card'
import { trackCoordinates } from './utils/coor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      data-testid='app'
      className='flex min-h-full flex-col bg-darkColor px-4 text-neutral-50 md:px-8'
      onMouseMove={trackCoordinates}
    >
      <div
        id='coor'
        data-testid='coor'
        className='absolute right-4 top-4 text-accentGreen'
      ></div>
      <Header title='Mouse Tracker' initialCount={count} />
      <main className='flex h-full grow items-center justify-center md:flex-row md:justify-around'>
        <Card setCount={setCount} />
      </main>
      <Footer />
    </div>
  )
}

export default App
