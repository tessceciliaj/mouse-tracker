const Card = () => {
  return (
    <div className='box-shadow h-80 w-80 bg-accentPurple p-6 md:p-8 text-black'>
      <div>
        <h2 className='text-lg font-medium'>Title</h2>
        <p data-testid='infotext' className='mt-2 text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div data-testid='resultbox' className='flex flex-col gap-x-2 justify-center items-center'>
        result
      </div>
    </div>
  )
}

export default Card
