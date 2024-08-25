'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-gradient-to-b from-dark-2 to-dark-4 p-6 pt-28 text-white max-sm:hidden lg:w-[264px] backdrop-blur-md bg-opacity-90 border-r border-dark-3 shadow-2xl transition-all duration-300 ease-in-out">
      <div className="flex flex-1 flex-col gap-5">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'relative flex gap-4 items-center p-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl',
                'bg-gradient-to-r from-gray-700 to-gray-800 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900',
                {
                  'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg': isActive,
                  'bg-dark-2 bg-opacity-60 hover:bg-opacity-80': !isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
                className="transition-transform duration-300 ease-in-out hover:rotate-12"
              />
              <p className="text-lg font-semibold text-white max-lg:hidden">
                {item.label}
              </p>
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-600 opacity-20 rounded-lg"></div>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
