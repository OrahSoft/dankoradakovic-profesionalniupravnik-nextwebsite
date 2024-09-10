'use client';

import Link from 'next/link';

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
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-white">
          <Link href="/">
            <p>PU Danko Radakovic PR</p>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/login">
            <p className="text-white hover:text-gray-300">Login</p>
          </Link>
          <Link href="/register">
            <p className="text-white hover:text-gray-300">Register</p>
          </Link>
          <a onClick={handleLogout} className="cursor-pointer">
            <p className="text-white hover:text-gray-300">Logout</p>
          </a>
        </div>
      </div>
    </nav>
  );
};
