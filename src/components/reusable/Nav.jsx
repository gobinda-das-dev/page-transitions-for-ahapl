import TransitionTo from './TransitionTo'

const Nav = ({base}) => {
   return (
      <nav className='w-full fixed top-0 left-0 z-50 flex justify-between px-20 py-6'>
         <h1 className='text-2xl font-bold'>logo</h1>

         <div className='flex gap-5'>
            <TransitionTo base={base} to={`${base}/`}>Home</TransitionTo>
            <TransitionTo base={base} to={`${base}/about`}>About</TransitionTo>
            <TransitionTo base={base} to={`${base}/contact`}>Contact</TransitionTo>
         </div>
      </nav>
   )
}

export default Nav
