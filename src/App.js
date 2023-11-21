import Footer from './components/Footer'

function App() {
  return (
    <div className='flex min-h-full flex-col bg-neutral-700 px-4 text-neutral-50 md:px-8'>
      <header>head</header>
      <main className='flex h-full grow items-center justify-center md:flex-row md:justify-around'>
        <h1 className='text-accentPurple'>Test Creation</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
