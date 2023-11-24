import ClickyButton from './ClickyButton'
import littleStar from '../assets/icons8-hand-drawn-star-24.png'
import { show_image } from '../utils/coor'

const Card = ({ setCount }) => {
  
  const handleShowImage = () => {
    show_image(littleStar, 25, 25, 'Star')
    setCount((prev) => prev + 1)
  }

  return (
    <section
      data-testid='card'
      className='box-shadow h-80 w-80 bg-accentPurple p-6 text-black md:p-8'
    >
      <div>
        <h3 className='text-lg font-medium'>Title</h3>
        <p data-testid='infotext' className='mt-2 text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div
        data-testid='resultbox'
        className='flex flex-col items-center justify-center gap-x-2 pt-2'
      >
        <ClickyButton />
        <button id='foo' onClick={handleShowImage}>
          Get a Star
        </button>
      </div>
    </section>
  )
}

export default Card
