import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-gradient-to-r from-blue-500 to-blue-800 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/' className='text-white'>
          <h1 className='font-bold text-lg sm:text-xl flex flex-wrap'>
            <span className='text-2xl'>AGM</span>
            <span className='text-3xl'>Rentals</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-white p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 text-gray-700 placeholder-gray-500'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='ml-2'>
            <FaSearch className='text-gray-700' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/' className='text-white hover:text-gray-200'>
            <li className='hidden sm:inline'>Home</li>
          </Link>
          <Link to='/about' className='text-white hover:text-gray-200'>
            <li className='hidden sm:inline'>About</li>
          </Link>
          <Link to='/profile' className='text-white'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li>Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
