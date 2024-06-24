'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { MdQuiz } from 'react-icons/md';
import { SignedIn,SignedOut,SignInButton,UserButton } from '@clerk/nextjs';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="relative flex h-16 w-auto items-center justify-between bg-blue-500 bg-opacity-100 px-8 text-sm text-grey-100 md:px-8">
      {/* Logo */}
      <Link href="/" className="flex gap-1 items-center text-2xl">
          <h1 className="text-dark font-bold">
              DsQuizAI
            </h1>
            <MdQuiz className="text-primary" />
      </Link>

      {/* Routing Links */}
      <ul
        className={`lg:visible lg:flex lg:items-center lg:space-x-6 ${
          openMenu
            ? 'absolute left-0 right-0 top-16 z-10 w-screen space-y-6 bg-black bg-opacity-95 p-8'
            : 'hidden'
        }`}
      >
        <li>
          <Link href="/" className="transition-all hover:text-green-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/info" className="transition-all hover:text-green-200">
            About
          </Link>
        </li>
        <li>
          <Link href="/leaderboard" className="transition-all hover:text-green-200">
            LeaderBoard
          </Link>
        </li>
        <li>
          <Link href="/profile" className="transition-all hover:text-green-200">
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="rounded-md bg-gray-800 p-3 text-sm text-white transition-all hover:bg-gray-700 hover:text-green-300 active:scale-95"
          >
            Start new quiz
          </Link>
        </li>
        <li>
        <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </li>
      </ul>

      {/* Mobile Menu Open/Close Button */}
      <button onClick={() => setOpenMenu(!openMenu)} className="lg:hidden">
        {openMenu ? (
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-400" />
        )}
      </button>
    </header>
  );
};

export default Header;
