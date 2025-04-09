// components/Navbar.tsx

'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    // Dọn dẹp tất cả thứ liên quan đến login
    localStorage.removeItem('token');
    sessionStorage.clear();

    // Optional: clear Redux/Zustand state nếu dùng

    // Chờ một chút cho an toàn (tránh race condition)
    setTimeout(() => {
      router.push('/login');
    }, 50);
  };
  return (
    <nav className='bg-white shadow-md px-6 py-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='text-xl font-bold text-blue-600'>My App</div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 items-center'>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/dashboard'>Dashboard</NavLink>
          <UserAvatar />
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='flex flex-row items-center justify-around'>
          <div className='md:hidden mt-2 space-y-2 px-4 ml-2'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/dashboard'>Dashboard</NavLink>
            <NavLink href='/profile'>Profile</NavLink>
            <NavLink href='/settings'>Settings</NavLink>
            <button
              className='text-gray-700 hover:text-blue-600 transition-colors block cursor-pointer'
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
          <div>
            {' '}
            <UserAvatar />
          </div>
        </div>
      )}
    </nav>
  );
}

// Link component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className='text-gray-700 hover:text-blue-600 transition-colors block'>
      {children}
    </a>
  );
}

// Avatar or login button
function UserAvatar() {
  // Đây là demo tĩnh, bạn có thể gắn logic auth ở đây
  const isLoggedIn = true;
  const userName = 'Jane';

  const router = useRouter();

  const handleLogout = () => {
    // Dọn dẹp tất cả thứ liên quan đến login
    localStorage.removeItem('token');
    sessionStorage.clear();

    // Optional: clear Redux/Zustand state nếu dùng

    // Chờ một chút cho an toàn (tránh race condition)
    setTimeout(() => {
      router.push('/login');
    }, 50);
  };

  const [isOpen, setIsOpen] = useState(false);

  if (!isLoggedIn) {
    return (
      <a href='/login' className='bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm'>
        Login
      </a>
    );
  }

  return (
    <div className='relative'>
      {/* Avatar and name */}
      <div className='flex items-center space-x-2 cursor-pointer' onClick={() => setIsOpen((prev) => !prev)}>
        <img src='https://i.pravatar.cc/30' alt='avatar' className='w-8 h-8 rounded-full' />
        <span className='text-sm text-gray-800'>{userName}</span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-10'>
          <NavLink href='/profile'>Profile</NavLink>
          <NavLink href='/settings'>Settings</NavLink>
          <button
            className='text-gray-700 hover:text-blue-600 transition-colors block cursor-pointer'
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
