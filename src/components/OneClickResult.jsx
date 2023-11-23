import { useState } from 'react'

const OneClickResult = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div data-testid='oneclickresult' className='flex flex-col gap-y-2'>
      <p className='mt-2 text-center text-sm'>
        {!clicked ? 'Click to find out what happens' : 'You get a STAR!'}
      </p>
      <button
        onClick={() => setClicked(true)}
        className='bg-fuchsia-50 px-6 py-2 font-medium capitalize'
      >
        clicky button
      </button>
    </div>
  )
}

export default OneClickResult
