import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-blue-600 p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold text-white'>
          <Link href='/'>Profesionalni upravnik</Link>
        </div>
        <div className='space-x-4'>
          <Link href='/login'>
            <p className='text-white hover:text-gray-300'>Login</p>
          </Link>
          <Link href='/register'>
            <p className='text-white hover:text-gray-300'>Register</p>
          </Link>
          <Link href='/logout'>
            <p className='text-white hover:text-gray-300'>Logout</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
