import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-gradient-to-r from-dark-1 via-dark-2 to-dark-3 px-6 py-4 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out lg:px-10">
      <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 ease-in-out">
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="yoom logo"
          className="max-sm:w-9 max-sm:h-9"
        />
        <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 max-sm:hidden">
          Yoom
        </p>
      </Link>
      <div className="flex items-center gap-5">
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <MobileNav /> 
      </div>
    </nav>
  );
};

export default Navbar;
