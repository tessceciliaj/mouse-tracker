import OneClickResult from './OneClickResult'
import littleStar from '../assets/icons8-hand-drawn-star-24.png'
import { show_image } from '../utils/coor';

const Card = () => {
  const handleShowImage = () => {
    show_image(littleStar, 25, 25, 'Star');
  };

  return (
    <section data-testid='card' className='box-shadow h-80 w-80 bg-accentPurple p-6 md:p-8 text-black'>
      <div>
        <h2 className='text-lg font-medium'>Title</h2>
        <p data-testid='infotext' className='mt-2 text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div data-testid='resultbox' className='flex flex-col gap-x-2 justify-center items-center pt-2'>
        <OneClickResult />
          <button id="foo" onClick={handleShowImage}>
          Get a Star
        </button>
      </div> 
    </section>
  )
}

export default Card
