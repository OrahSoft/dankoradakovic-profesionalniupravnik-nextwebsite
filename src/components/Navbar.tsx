'use client';

import Link from 'next/link';
import './Navbar.css';

import LoginIcon from '@utils/LoginIcon';
import LogoutIcon from '@utils/LogoutIcon';
import RegisterIcon from '@utils/RegisterIcon';

export const Navbar = () => {
  const handleLogout = () => {
    fetch('/api/logout', { method: 'POST' })
      .then((response) => response.json())
      .then((data) => {
        alert(data.success);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <nav className="navbar bg-primaryBlue p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-white">
          <Link href="/">
            <p>PU Danko Radakovic PR</p>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/login" title="Login">
            <LoginIcon />
          </Link>
          <a onClick={handleLogout} className="cursor-pointer">
            <LogoutIcon />
          </a>
          <Link href="/register">
            <RegisterIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};
