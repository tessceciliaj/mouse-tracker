const Header = ({ title, initialCount: count = 0 }) => {
  return (
    <header className='flex flex-col items-center'>
      <p
        className='absolute  left-4 top-4 text-accentPurple'
        data-testid='count'
      >
        {count}
      </p>
      <h1 className='py-4 text-xl'>{title}</h1>
      <h2>Welcome to your own clickathon!</h2>
    </header>
  )
}

export default Header
